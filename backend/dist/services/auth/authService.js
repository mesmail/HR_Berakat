"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../../database/repositories/userRepository"));
const Error400_1 = __importDefault(require("../../errors/Error400"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const emailSender_1 = __importDefault(require("../../services/emailSender"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tenantUserRepository_1 = __importDefault(require("../../database/repositories/tenantUserRepository"));
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
const config_1 = require("../../config");
const tenantService_1 = __importDefault(require("../tenantService"));
const tenantRepository_1 = __importDefault(require("../../database/repositories/tenantRepository"));
const tenantSubdomain_1 = require("../tenantSubdomain");
const Error401_1 = __importDefault(require("../../errors/Error401"));
const moment_1 = __importDefault(require("moment"));
const BCRYPT_SALT_ROUNDS = 12;
class AuthService {
    static signup(email, password, invitationToken, tenantId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(options.database);
            try {
                email = email.toLowerCase();
                const existingUser = yield userRepository_1.default.findByEmail(email, options);
                // Generates a hashed password to hide the original one.
                const hashedPassword = yield bcrypt_1.default.hash(password, BCRYPT_SALT_ROUNDS);
                // The user may already exist on the database in case it was invided.
                if (existingUser) {
                    // If the user already have an password,
                    // it means that it has already signed up
                    const existingPassword = yield userRepository_1.default.findPassword(existingUser.id, options);
                    if (existingPassword) {
                        throw new Error400_1.default(options.language, 'auth.emailAlreadyInUse');
                    }
                    /**
                     * In the case of the user exists on the database (was invited)
                     * it only creates the new password
                     */
                    yield userRepository_1.default.updatePassword(existingUser.id, hashedPassword, false, Object.assign(Object.assign({}, options), { transaction, bypassPermissionValidation: true }));
                    // Handles onboarding process like
                    // invitation, creation of default tenant,
                    // or default joining the current tenant
                    yield this.handleOnboard(existingUser, invitationToken, tenantId, Object.assign(Object.assign({}, options), { transaction }));
                    // Email may have been alreadyverified using the invitation token
                    const isEmailVerified = Boolean(yield userRepository_1.default.count({
                        emailVerified: true,
                        id: existingUser.id,
                    }, Object.assign(Object.assign({}, options), { transaction })));
                    if (!isEmailVerified && emailSender_1.default.isConfigured) {
                        yield this.sendEmailAddressVerificationEmail(options.language, existingUser.email, tenantId, Object.assign(Object.assign({}, options), { transaction, bypassPermissionValidation: true }));
                    }
                    const token = jsonwebtoken_1.default.sign({ id: existingUser.id }, config_1.getConfig().AUTH_JWT_SECRET, { expiresIn: config_1.getConfig().AUTH_JWT_EXPIRES_IN });
                    yield sequelizeRepository_1.default.commitTransaction(transaction);
                    return token;
                }
                const newUser = yield userRepository_1.default.createFromAuth({
                    firstName: email.split('@')[0],
                    password: hashedPassword,
                    email: email,
                }, Object.assign(Object.assign({}, options), { transaction }));
                // Handles onboarding process like
                // invitation, creation of default tenant,
                // or default joining the current tenant
                yield this.handleOnboard(newUser, invitationToken, tenantId, Object.assign(Object.assign({}, options), { transaction }));
                // Email may have been alreadyverified using the invitation token
                const isEmailVerified = Boolean(yield userRepository_1.default.count({
                    emailVerified: true,
                    id: newUser.id,
                }, Object.assign(Object.assign({}, options), { transaction })));
                if (!isEmailVerified && emailSender_1.default.isConfigured) {
                    yield this.sendEmailAddressVerificationEmail(options.language, newUser.email, tenantId, Object.assign(Object.assign({}, options), { transaction }));
                }
                const token = jsonwebtoken_1.default.sign({ id: newUser.id }, config_1.getConfig().AUTH_JWT_SECRET, { expiresIn: config_1.getConfig().AUTH_JWT_EXPIRES_IN });
                yield sequelizeRepository_1.default.commitTransaction(transaction);
                return token;
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                throw error;
            }
        });
    }
    static findByEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            email = email.toLowerCase();
            return userRepository_1.default.findByEmail(email, options);
        });
    }
    static signin(email, password, invitationToken, tenantId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(options.database);
            try {
                email = email.toLowerCase();
                const user = yield userRepository_1.default.findByEmail(email, options);
                if (!user) {
                    throw new Error400_1.default(options.language, 'auth.userNotFound');
                }
                const currentPassword = yield userRepository_1.default.findPassword(user.id, options);
                if (!currentPassword) {
                    throw new Error400_1.default(options.language, 'auth.wrongPassword');
                }
                const passwordsMatch = yield bcrypt_1.default.compare(password, currentPassword);
                if (!passwordsMatch) {
                    throw new Error400_1.default(options.language, 'auth.wrongPassword');
                }
                // Handles onboarding process like
                // invitation, creation of default tenant,
                // or default joining the current tenant
                yield this.handleOnboard(user, invitationToken, tenantId, Object.assign(Object.assign({}, options), { currentUser: user, transaction }));
                const token = jsonwebtoken_1.default.sign({ id: user.id }, config_1.getConfig().AUTH_JWT_SECRET, { expiresIn: config_1.getConfig().AUTH_JWT_EXPIRES_IN });
                yield sequelizeRepository_1.default.commitTransaction(transaction);
                return token;
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                throw error;
            }
        });
    }
    static handleOnboard(currentUser, invitationToken, tenantId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (invitationToken) {
                try {
                    yield tenantUserRepository_1.default.acceptInvitation(invitationToken, Object.assign(Object.assign({}, options), { currentUser, bypassPermissionValidation: true }));
                }
                catch (error) {
                    console.error(error);
                    // In case of invitation acceptance error, does not prevent
                    // the user from sign up/in
                }
            }
            const isMultiTenantViaSubdomain = ['multi', 'multi-with-subdomain'].includes(config_1.getConfig().TENANT_MODE) && tenantId;
            if (isMultiTenantViaSubdomain) {
                yield new tenantService_1.default(Object.assign(Object.assign({}, options), { currentUser })).joinWithDefaultRolesOrAskApproval({
                    tenantId,
                    // leave empty to require admin's approval
                    roles: [],
                }, options);
            }
            const singleTenant = config_1.getConfig().TENANT_MODE === 'single';
            if (singleTenant) {
                // In case is single tenant, and the user is signing in
                // with an invited email and for some reason doesn't have the token
                // it auto-assigns it
                yield new tenantService_1.default(Object.assign(Object.assign({}, options), { currentUser })).joinDefaultUsingInvitedEmail(options.transaction);
                // Creates or join default Tenant
                yield new tenantService_1.default(Object.assign(Object.assign({}, options), { currentUser })).createOrJoinDefault({
                    // leave empty to require admin's approval
                    roles: [],
                }, options.transaction);
            }
        });
    }
    static findByToken(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                jsonwebtoken_1.default.verify(token, config_1.getConfig().AUTH_JWT_SECRET, (err, decoded) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    const id = decoded.id;
                    const jwtTokenIat = decoded.iat;
                    userRepository_1.default.findById(id, Object.assign(Object.assign({}, options), { bypassPermissionValidation: true }))
                        .then((user) => {
                        const isTokenManuallyExpired = user &&
                            user.jwtTokenInvalidBefore &&
                            moment_1.default
                                .unix(jwtTokenIat)
                                .isBefore(moment_1.default(user.jwtTokenInvalidBefore));
                        if (isTokenManuallyExpired) {
                            reject(new Error401_1.default());
                            return;
                        }
                        // If the email sender id not configured,
                        // removes the need for email verification.
                        if (user && !emailSender_1.default.isConfigured) {
                            user.emailVerified = true;
                        }
                        resolve(user);
                    })
                        .catch((error) => reject(error));
                });
            });
        });
    }
    static sendEmailAddressVerificationEmail(language, email, tenantId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!emailSender_1.default.isConfigured) {
                throw new Error400_1.default(language, 'email.error');
            }
            let link;
            try {
                let tenant;
                if (tenantId) {
                    tenant = yield tenantRepository_1.default.findById(tenantId, Object.assign({}, options));
                }
                email = email.toLowerCase();
                const token = yield userRepository_1.default.generateEmailVerificationToken(email, options);
                link = `${tenantSubdomain_1.tenantSubdomain.frontendUrl(tenant)}/auth/verify-email?token=${token}`;
            }
            catch (error) {
                console.error(error);
                throw new Error400_1.default(language, 'auth.emailAddressVerificationEmail.error');
            }
            return new emailSender_1.default(emailSender_1.default.TEMPLATES.EMAIL_ADDRESS_VERIFICATION, { link }).sendTo(email);
        });
    }
    static sendPasswordResetEmail(language, email, tenantId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!emailSender_1.default.isConfigured) {
                throw new Error400_1.default(language, 'email.error');
            }
            let link;
            try {
                let tenant;
                if (tenantId) {
                    tenant = yield tenantRepository_1.default.findById(tenantId, Object.assign({}, options));
                }
                email = email.toLowerCase();
                const token = yield userRepository_1.default.generatePasswordResetToken(email, options);
                link = `${tenantSubdomain_1.tenantSubdomain.frontendUrl(tenant)}/auth/password-reset?token=${token}`;
            }
            catch (error) {
                console.error(error);
                throw new Error400_1.default(language, 'auth.passwordReset.error');
            }
            return new emailSender_1.default(emailSender_1.default.TEMPLATES.PASSWORD_RESET, { link }).sendTo(email);
        });
    }
    static verifyEmail(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = options.currentUser;
            const user = yield userRepository_1.default.findByEmailVerificationToken(token, options);
            if (!user) {
                throw new Error400_1.default(options.language, 'auth.emailAddressVerificationEmail.invalidToken');
            }
            if (currentUser &&
                currentUser.id &&
                currentUser.id !== user.id) {
                throw new Error400_1.default(options.language, 'auth.emailAddressVerificationEmail.signedInAsWrongUser', user.email, currentUser.email);
            }
            return userRepository_1.default.markEmailVerified(user.id, options);
        });
    }
    static passwordReset(token, password, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepository_1.default.findByPasswordResetToken(token, options);
            if (!user) {
                throw new Error400_1.default(options.language, 'auth.passwordReset.invalidToken');
            }
            const hashedPassword = yield bcrypt_1.default.hash(password, BCRYPT_SALT_ROUNDS);
            return userRepository_1.default.updatePassword(user.id, hashedPassword, true, Object.assign(Object.assign({}, options), { bypassPermissionValidation: true }));
        });
    }
    static changePassword(oldPassword, newPassword, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = options.currentUser;
            const currentPassword = yield userRepository_1.default.findPassword(options.currentUser.id, options);
            const passwordsMatch = yield bcrypt_1.default.compare(oldPassword, currentPassword);
            if (!passwordsMatch) {
                throw new Error400_1.default(options.language, 'auth.passwordChange.invalidPassword');
            }
            const newHashedPassword = yield bcrypt_1.default.hash(newPassword, BCRYPT_SALT_ROUNDS);
            return userRepository_1.default.updatePassword(currentUser.id, newHashedPassword, true, options);
        });
    }
    static signinFromSocial(provider, providerId, email, emailVerified, firstName, lastName, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error('auth-no-email');
            }
            const transaction = yield sequelizeRepository_1.default.createTransaction(options.database);
            try {
                email = email.toLowerCase();
                let user = yield userRepository_1.default.findByEmail(email, options);
                if (user &&
                    (user.provider !== provider ||
                        user.providerId !== providerId)) {
                    throw new Error('auth-invalid-provider');
                }
                if (!user) {
                    user = yield userRepository_1.default.createFromSocial(provider, providerId, email, emailVerified, firstName, lastName, options);
                }
                const token = jsonwebtoken_1.default.sign({ id: user.id }, config_1.getConfig().AUTH_JWT_SECRET, { expiresIn: config_1.getConfig().AUTH_JWT_EXPIRES_IN });
                yield sequelizeRepository_1.default.commitTransaction(transaction);
                return token;
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                throw error;
            }
        });
    }
}
exports.default = AuthService;
//# sourceMappingURL=authService.js.map
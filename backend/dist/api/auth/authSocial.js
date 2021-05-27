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
const passport_1 = __importDefault(require("passport"));
const authService_1 = __importDefault(require("../../services/auth/authService"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const passport_facebook_1 = __importDefault(require("passport-facebook"));
const apiResponseHandler_1 = __importDefault(require("../apiResponseHandler"));
const databaseConnection_1 = require("../../database/databaseConnection");
const lodash_1 = require("lodash");
exports.default = (app, routes) => {
    app.use(passport_1.default.initialize());
    passport_1.default.serializeUser(function (user, done) {
        done(null, user);
    });
    passport_1.default.deserializeUser(function (user, done) {
        done(null, user);
    });
    routes.post('/auth/social/onboard', function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield authService_1.default.handleOnboard(req.currentUser, req.body.invitationToken, req.body.tenantId, req);
                yield apiResponseHandler_1.default.success(req, res, payload);
            }
            catch (error) {
                yield apiResponseHandler_1.default.error(req, res, error);
            }
        });
    });
    if (process.env.AUTH_SOCIAL_GOOGLE_CLIENT_ID) {
        passport_1.default.use(new passport_google_oauth20_1.default({
            clientID: process.env.AUTH_SOCIAL_GOOGLE_CLIENT_ID,
            clientSecret: process.env.AUTH_SOCIAL_GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.AUTH_SOCIAL_GOOGLE_CALLBACK_URL,
        }, function (accessToken, refreshToken, profile, done) {
            databaseConnection_1.databaseInit()
                .then((database) => {
                const email = lodash_1.get(profile, 'emails[0].value');
                const emailVerified = lodash_1.get(profile, 'emails[0].verified', false);
                const displayName = lodash_1.get(profile, 'displayName');
                const { firstName, lastName } = splitFullName(displayName);
                return authService_1.default.signinFromSocial('google', profile.id, email, emailVerified, firstName, lastName, { database });
            })
                .then((jwtToken) => {
                done(null, jwtToken);
            })
                .catch((error) => {
                console.error(error);
                done(error, null);
            });
        }));
        routes.get('/auth/social/google', passport_1.default.authenticate('google', {
            scope: ['email', 'profile'],
            session: false,
        }), function (req, res) {
            // The request will be redirected for authentication, so this
            // function will not be called.
        });
        routes.get('/auth/social/google/callback', function (req, res, next) {
            passport_1.default.authenticate('google', (err, jwtToken) => {
                handleCallback(res, err, jwtToken);
            })(req, res, next);
        });
    }
    if (process.env.AUTH_SOCIAL_FACEBOOK_CLIENT_ID) {
        passport_1.default.use(new passport_facebook_1.default({
            clientID: process.env.AUTH_SOCIAL_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.AUTH_SOCIAL_FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.AUTH_SOCIAL_FACEBOOK_CALLBACK_URL,
            profileFields: ['id', 'email', 'displayName'],
        }, function (accessToken, refreshToken, profile, done) {
            databaseConnection_1.databaseInit()
                .then((database) => {
                const email = lodash_1.get(profile, 'emails[0].value');
                const emailVerified = true;
                const displayName = lodash_1.get(profile, 'displayName');
                const { firstName, lastName } = splitFullName(displayName);
                return authService_1.default.signinFromSocial('facebook', profile.id, email, emailVerified, firstName, lastName, { database });
            })
                .then((jwtToken) => {
                done(null, jwtToken);
            })
                .catch((error) => {
                console.error(error);
                done(error, null);
            });
        }));
        routes.get('/auth/social/facebook', passport_1.default.authenticate('facebook', {
            session: false,
        }), function (req, res) {
            // The request will be redirected for authentication, so this
            // function will not be called.
        });
        routes.get('/auth/social/facebook/callback', function (req, res, next) {
            passport_1.default.authenticate('facebook', (err, jwtToken) => {
                handleCallback(res, err, jwtToken);
            })(req, res, next);
        });
    }
};
function handleCallback(res, err, jwtToken) {
    if (err) {
        console.error(err);
        let errorCode = 'generic';
        if (['auth-invalid-provider', 'auth-no-email'].includes(err.message)) {
            errorCode = err.message;
        }
        res.redirect(`${process.env.FRONTEND_URL}/auth/signin?socialErrorCode=${errorCode}`);
        return;
    }
    res.redirect(`${process.env.FRONTEND_URL}/?social=true&authToken=${jwtToken}`);
}
function splitFullName(fullName) {
    let firstName;
    let lastName;
    if (fullName && fullName.split(' ').length > 1) {
        const [firstNameArray, ...lastNameArray] = fullName.split(' ');
        firstName = firstNameArray;
        lastName = lastNameArray.join(' ');
    }
    else {
        firstName = fullName || null;
        lastName = null;
    }
    return { firstName, lastName };
}
//# sourceMappingURL=authSocial.js.map
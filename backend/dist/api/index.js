"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const tenantMiddleware_1 = require("../middlewares/tenantMiddleware");
const databaseMiddleware_1 = require("../middlewares/databaseMiddleware");
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const apiRateLimiter_1 = require("./apiRateLimiter");
const languageMiddleware_1 = require("../middlewares/languageMiddleware");
const authSocial_1 = __importDefault(require("./auth/authSocial"));
const apiDocumentation_1 = __importDefault(require("./apiDocumentation"));
const app = express_1.default();
// Enables CORS
app.use(cors_1.default({ origin: true }));
// Initializes and adds the database middleware.
app.use(databaseMiddleware_1.databaseMiddleware);
// Sets the current language of the request
app.use(languageMiddleware_1.languageMiddleware);
// Configures the authentication middleware
// to set the currentUser to the requests
app.use(authMiddleware_1.authMiddleware);
// Setup the Documentation
apiDocumentation_1.default(app);
// Default rate limiter
const defaultRateLimiter = apiRateLimiter_1.createRateLimiter({
    max: 500,
    windowMs: 15 * 60 * 1000,
    message: 'errors.429',
});
app.use(defaultRateLimiter);
// Enables Helmet, a set of tools to
// increase security.
app.use(helmet_1.default());
// Parses the body of POST/PUT request
// to JSON
app.use(body_parser_1.default.json({
    verify: function (req, res, buf) {
        const url = req.originalUrl;
        if (url.startsWith('/api/plan/stripe/webhook')) {
            // Stripe Webhook needs the body raw in order
            // to validate the request
            req.rawBody = buf.toString();
        }
    },
}));
// Configure the Entity routes
const routes = express_1.default.Router();
// Enable Passport for Social Sign-in
authSocial_1.default(app, routes);
require('./auditLog').default(routes);
require('./auth').default(routes);
require('./plan').default(routes);
require('./tenant').default(routes);
require('./file').default(routes);
require('./user').default(routes);
require('./settings').default(routes);
require('./candidates').default(routes);
require('./jobs').default(routes);
require('./departments').default(routes);
require('./academicCertificates').default(routes);
require('./softSkills').default(routes);
require('./trainingCertificates').default(routes);
require('./professionalCertifications').default(routes);
require('./managementSkills').default(routes);
require('./artisticSkills').default(routes);
require('./clients').default(routes);
require('./usersNew').default(routes);
require('./jobFrameworks').default(routes);
require('./leaveApplicationForm').default(routes);
// Loads the Tenant if the :tenantId param is passed
routes.param('tenantId', tenantMiddleware_1.tenantMiddleware);
// Add the routes to the /api endpoint
app.use('/api', routes);
exports.default = app;
//# sourceMappingURL=index.js.map
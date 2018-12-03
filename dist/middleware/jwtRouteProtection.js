"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var jwtSecret_1 = __importDefault(require("../keys/jwtSecret"));
var tokenChecker = function (request, response, next) {
    try {
        var token = request.body.token || request.query.token || request.headers.authorization;
        var decodedToken = jsonwebtoken_1.default.verify(token, jwtSecret_1.default.tokenSecret);
        next();
    }
    catch (error) {
        var context_1 = {
            message: "Auth Failed " + error,
            success: false
        };
        return response.status(401).json(context_1);
    }
};
exports.default = tokenChecker;
//# sourceMappingURL=jwtRouteProtection.js.map
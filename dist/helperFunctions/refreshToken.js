"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var jwtSecret_1 = __importDefault(require("../keys/jwtSecret"));
//5184000 = 1 month
var createRefreshToken = function (uid) {
    var signOptions = {
        userId: uid
    };
    var tokenOptions = {
        expiresIn: 5184000
    };
    var refreshToken = jsonwebtoken_1.default.sign(signOptions, jwtSecret_1.default.resfreshTokenSecret, tokenOptions);
    return refreshToken;
};
exports.default = createRefreshToken;
//# sourceMappingURL=refreshToken.js.map
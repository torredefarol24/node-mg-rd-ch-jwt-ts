"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var jwtSecret_1 = __importDefault(require("../keys/jwtSecret"));
//172800 = 2 Days
var createToken = function (uid) {
    var signOptions = {
        userId: uid
    };
    var tokenOptions = {
        expiresIn: 172800
        // expiresIn : 10
    };
    var token = jsonwebtoken_1.default.sign(signOptions, jwtSecret_1.default.tokenSecret, tokenOptions);
    return token;
};
exports.default = createToken;
//# sourceMappingURL=createJWT.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var createJWT_1 = __importDefault(require("../../helperFunctions/createJWT"));
var redisDB = redis_1.default.createClient();
var refreshJWT = function (request, response) {
    var refreshToken = request.headers.authorization || request.body.refreshToken || request.query.refreshToken;
    var tokenPayload = jsonwebtoken_1.default.decode(refreshToken);
    var userId = tokenPayload.userId;
    var context = {
        success: false,
        message: ""
    };
    var recordName = "TOKEN_LIST_" + userId;
    redisDB.hgetall(recordName, function (err, data) {
        try {
            if (refreshToken == data.refreshToken) {
                context.success = true;
                context.message = "Token Renewed";
                context.token = createJWT_1.default(userId);
                var redisData = {
                    "token": "" + context.token,
                    "refreshToken": "" + data.refreshToken
                };
                redisDB.hmset(recordName, redisData);
                return response.status(200).json(context);
            }
            else {
                context.message = "INVALID REFRESH TOKEN";
                console.log("AUTH ERROR ", context.message);
                return response.status(401).json(context);
            }
        }
        catch (error) {
            context.message = error;
            console.log("AUTH ERROR ", context.message);
            return response.status(401).json(context);
        }
    });
};
exports.default = refreshJWT;
//# sourceMappingURL=refreshToken.js.map
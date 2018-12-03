"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var createJWT_1 = __importDefault(require("../../helperFunctions/createJWT"));
// var redisDB = redis.createClient(6379, "localhost")
var redisDB = redis_1.default.createClient(6379, "redis");
var refreshJWT = function (request, response) {
    var context = {
        success: false,
        message: ""
    };
    var refreshToken = request.headers.authorization || request.body.refreshToken || request.query.refreshToken;
    if (!refreshToken) {
        context.message = "Token Missing!";
        return response.status(404).json(context);
    }
    var tokenPayload = jsonwebtoken_1.default.decode(refreshToken);
    var userId = tokenPayload ? tokenPayload.userId : null;
    var recordName = "";
    if (userId == null) {
        context.message = "INVALID AUTH TOKEN";
        return response.status(401).json(context);
    }
    else {
        recordName = "TOKEN_LIST_" + userId;
    }
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
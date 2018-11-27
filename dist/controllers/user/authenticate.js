"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../../mongo-models/user"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var loginUser = function (request, response) {
    var context = {
        message: "Route and Controller works ",
        success: false
    };
    if (!request.body.email || !request.body.password) {
        context.message = "Values Missing from Request";
        console.error(context.message);
        return response.status(400).json(context);
    }
    var userFindOptions = {
        email: request.body.email
    };
    user_1.default.findOne(userFindOptions)
        .then(function (user) {
        if (user) {
            bcrypt_1.default.compare(request.body.password, user.password)
                .then(function (result) {
                if (result == true) {
                    context.message = "Auth Successfull";
                    context.success = true;
                    return response.status(200).json(context);
                }
                else {
                    context.message = "Auth Unsuccessfull";
                    console.error(context.message);
                    return response.status(403).json(context);
                }
            })
                .catch(function (err) {
                context.message = err;
                console.error(context.message);
                return response.status(500).json(context);
            });
        }
        else {
            context.message = "User Doesn't Exist";
            console.error(context.message);
            return response.status(404).json(context);
        }
    })
        .catch(function (err) {
        context.message = err;
        console.error(context.message);
        return response.status(500).json(context);
    });
};
exports.default = loginUser;
//# sourceMappingURL=authenticate.js.map
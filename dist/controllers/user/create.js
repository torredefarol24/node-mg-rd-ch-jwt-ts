"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../../mongo-models/user"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var saltRounds = 10;
var createUser = function (request, response) {
    var context = {
        user: null,
        message: "Route and Controller works ",
        success: false
    };
    if (!request.body.fullName || !request.body.email || !request.body.password) {
        context.message = "Values Missing from Request";
        console.log(context.message);
        return response.status(400).json(context);
    }
    var userFindOptions = {
        email: request.body.email
    };
    var newUser = {
        fullName: request.body.fullName,
        email: request.body.email
    };
    user_1.default.findOne(userFindOptions)
        .then(function (user) {
        if (user) {
            context.message = "Email already taken";
            console.log(context.message);
            return response.status(401).json(context);
        }
        else {
            bcrypt_1.default.hash(request.body.password, saltRounds)
                .then(function (hashedPass) {
                newUser.password = hashedPass;
                user_1.default.create(newUser)
                    .then(function (user) {
                    context.message = "User Created " + user._id;
                    context.success = true;
                    console.log(context.message);
                    return response.status(201).json(context);
                })
                    .catch(function (err) {
                    context.message = err;
                    console.log(context.message);
                    return response.status(500).json(context);
                });
            })
                .catch(function (err) {
                context.message = err;
                console.log(context.message);
                return response.status(500).json(context);
            });
        }
    })
        .catch(function (err) {
        context.message = err;
        console.log(context.message);
        return response.status(500).json(context);
    });
};
exports.default = createUser;
//# sourceMappingURL=create.js.map
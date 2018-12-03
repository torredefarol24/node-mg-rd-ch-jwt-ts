"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = __importDefault(require("./create"));
var authenticate_1 = __importDefault(require("./authenticate"));
var refreshToken_1 = __importDefault(require("./refreshToken"));
var UserController = {
    createNewUser: create_1.default,
    loginUser: authenticate_1.default,
    refreshToken: refreshToken_1.default
};
exports.default = UserController;
//# sourceMappingURL=userController.js.map
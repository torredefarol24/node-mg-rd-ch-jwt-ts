"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var user_1 = __importDefault(require("../mongo-schemas/user"));
var UserModelName = "User";
mongoose_1.default.models = {};
var UserModel = mongoose_1.default.model(UserModelName, user_1.default);
exports.default = UserModel;
//# sourceMappingURL=user.js.map
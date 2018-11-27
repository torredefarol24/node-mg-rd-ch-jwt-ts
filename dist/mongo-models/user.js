"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schemaOptions = {
    firstName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
};
var UserSchema = new mongoose_1.default.Schema(schemaOptions);
var UserModelName = "User";
var UserModel = mongoose_1.default.model(UserModelName, UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map
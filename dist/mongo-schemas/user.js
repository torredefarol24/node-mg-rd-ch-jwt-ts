"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
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
var UserSchema = new Schema(schemaOptions);
exports.default = UserSchema;
//# sourceMappingURL=user.js.map
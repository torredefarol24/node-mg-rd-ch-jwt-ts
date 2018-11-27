"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var schemaOptions = {};
var UserSchema = new mongoose.Schema(schemaOptions);
var UserModelName = "User";
var UserModel = mongoose.model(UserModelName, UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbKeys_1 = __importDefault(require("../keys/dbKeys"));
var mongoose_1 = __importDefault(require("mongoose"));
var mongoDBSetup = function () {
    mongoose_1.default.connect(dbKeys_1.default.mongoLocalUrl, { useNewUrlParser: true })
        .then(function () { return console.log("Mongo DB Connection Successfull"); })
        .catch(function (err) { return console.error("Mongo DB Error ", err); });
};
exports.default = mongoDBSetup;
//# sourceMappingURL=mongoDbConfig.js.map
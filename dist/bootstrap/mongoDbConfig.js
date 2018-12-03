"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbKeys_1 = __importDefault(require("../keys/dbKeys"));
var mongoose_1 = __importDefault(require("mongoose"));
var mongoDBLocalSetup = function () {
    mongoose_1.default.connect(dbKeys_1.default.mongoLocalUrl, { useNewUrlParser: true })
        .then(function () {
        console.log("Mongo DB Local Connection Successfull");
    })
        .catch(function (err) {
        console.error("Mongo DB Error ", err);
    });
};
var mongoDBDockerSetup = function () {
    mongoose_1.default.connect(dbKeys_1.default.mongoDockerURL, { useNewUrlParser: true })
        .then(function () {
        console.log("Mongo DB Docker Connection Successfull");
    })
        .catch(function (err) {
        console.error("Mongo DB Error ", err);
    });
};
var mongoDBSetup = {
    localSetup: mongoDBLocalSetup,
    dockerSetup: mongoDBDockerSetup
};
exports.default = mongoDBSetup;
//# sourceMappingURL=mongoDbConfig.js.map
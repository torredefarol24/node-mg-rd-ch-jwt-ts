"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dbKeys_1 = __importDefault(require("../../keys/dbKeys"));
var chai_1 = __importDefault(require("chai"));
var chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default);
var descriptionText = "Mongo DB Connection";
var itConnectionText = "should connect to database";
describe(descriptionText, function () {
    it(itConnectionText, function () {
        return mongoose_1.default.connect(dbKeys_1.default.mongoLocalUrl, { useNewUrlParser: true })
            .then(function () { return chai_1.default.expect(5).to.be.equal(5); })
            .catch(function (err) { return chai_1.default.assert.fail(err); });
    });
});
//# sourceMappingURL=connection.spec.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var redis_1 = __importDefault(require("redis"));
var dbKeys_1 = __importDefault(require("../../keys/dbKeys"));
var chai_1 = __importDefault(require("chai"));
var chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default);
describe("Mongo DB Connection", function () {
    it("should connect to mongo database", function () {
        return mongoose_1.default.connect(dbKeys_1.default.mongoLocalUrl, { useNewUrlParser: true })
            .then(function () { return chai_1.default.expect(5).to.be.equal(5); })
            .catch(function (err) { return chai_1.default.assert.fail(err); });
    });
});
describe("Redis DB COnnection", function () {
    it("should connect to Redis DB", function () {
        var client = redis_1.default.createClient();
        client.on('connect', function (err) {
            if (err) {
                chai_1.default.assert.fail(err);
            }
            else {
                chai_1.default.expect(5).to.equal(5);
            }
        });
    });
});
//# sourceMappingURL=connection.spec.js.map
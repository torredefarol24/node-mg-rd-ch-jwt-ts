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
describe("Mongo DB Local Connection", function () {
    it("should connect to localhost mongo database", function () {
        return mongoose_1.default.connect(dbKeys_1.default.mongoLocalUrl, { useNewUrlParser: true })
            .then(function () { return chai_1.default.expect(5).to.be.equal(5); })
            .catch(function (err) { return chai_1.default.assert.fail(err); });
    });
});
describe("Mongo DB Docker Connection", function () {
    it("should connect to Docker Container mongo database", function () {
        return mongoose_1.default.connect(dbKeys_1.default.mongoDockerURL, { useNewUrlParser: true })
            .then(function () { return chai_1.default.expect(5).to.be.equal(5); })
            .catch(function (err) { return chai_1.default.assert.fail(err); });
    });
});
describe("Redis DB Local Connection", function () {
    it("should connect to Local Redis DB", function () {
        var redisDB = redis_1.default.createClient();
        redisDB.on('connect', function (err) {
            if (err) {
                chai_1.default.assert.fail(err);
            }
            else {
                chai_1.default.expect(5).to.equal(5);
            }
        });
    });
});
describe("Redis DB Docker Connection", function () {
    it("should connect to Docker Container Redis DB", function () {
        var redisDB = redis_1.default.createClient(6379, "redis");
        redisDB.on('connect', function (err) {
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
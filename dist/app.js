"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParserConfig_1 = __importDefault(require("./bootstrap/bodyParserConfig"));
var routeConfig_1 = __importDefault(require("./bootstrap/routeConfig"));
var NodeExpressTsApp = /** @class */ (function () {
    function NodeExpressTsApp() {
        this.hostApp = express_1.default();
        this.bodyParserSetup();
        this.routeSetup();
    }
    NodeExpressTsApp.prototype.bodyParserSetup = function () {
        bodyParserConfig_1.default(this.hostApp);
    };
    NodeExpressTsApp.prototype.routeSetup = function () {
        routeConfig_1.default(this.hostApp);
    };
    return NodeExpressTsApp;
}());
var nodeApp = new NodeExpressTsApp();
exports.default = nodeApp.hostApp;
//# sourceMappingURL=app.js.map
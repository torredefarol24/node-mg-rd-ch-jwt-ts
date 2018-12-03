"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sayHey_1 = __importDefault(require("./sayHey"));
var catData_1 = __importDefault(require("./catData"));
var IndexController = {
    sayHello: sayHey_1.default,
    getProtectedCatData: catData_1.default
};
exports.default = IndexController;
//# sourceMappingURL=theIndexController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = 4000;
var callback = function () {
    console.log("App running on", port);
};
app_1.default.listen(port, callback);
//# sourceMappingURL=server.js.map
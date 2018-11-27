"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var theIndexController_1 = __importDefault(require("../controllers/theIndex/theIndexController"));
var IndexRouter = express_1.Router();
IndexRouter.get("/", theIndexController_1.default.sayHello);
exports.default = IndexRouter;
//# sourceMappingURL=indexRouter.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var theIndexController_1 = __importDefault(require("../controllers/theIndex/theIndexController"));
var jwtRouteProtection_1 = __importDefault(require("../middleware/jwtRouteProtection"));
var IndexRouter = express_1.Router();
IndexRouter.get("/", theIndexController_1.default.sayHello);
IndexRouter.get("/dummy/cats", jwtRouteProtection_1.default, theIndexController_1.default.getProtectedCatData);
exports.default = IndexRouter;
//# sourceMappingURL=indexRouter.js.map
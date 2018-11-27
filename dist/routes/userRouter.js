"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("../controllers/user/userController"));
var userRouter = express_1.Router();
userRouter.post("/", userController_1.default.createNewUser);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map
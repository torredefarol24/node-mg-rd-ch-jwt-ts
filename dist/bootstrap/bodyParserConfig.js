"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = __importStar(require("body-parser"));
function bodyParserSetup(appInstance) {
    appInstance.use(bodyParser.json());
    appInstance.use(bodyParser.urlencoded({ extended: true }));
}
exports.default = bodyParserSetup;
//# sourceMappingURL=bodyParserConfig.js.map
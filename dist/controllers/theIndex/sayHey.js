"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sayHey = function (request, response) {
    var context = {
        message: "App Works"
    };
    return response.status(200).json(context);
};
exports.default = sayHey;
//# sourceMappingURL=sayHey.js.map
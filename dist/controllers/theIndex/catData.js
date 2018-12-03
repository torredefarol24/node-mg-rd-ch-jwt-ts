"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllCats = function (request, response) {
    var cats = [
        {
            id: 1,
            name: "Henrietta"
        },
        {
            id: 2,
            name: "Mary"
        },
        {
            id: 3,
            name: "Jason"
        }
    ];
    var context = {
        success: true,
        data: cats
    };
    return response.status(200).json(context);
};
exports.default = getAllCats;
//# sourceMappingURL=catData.js.map
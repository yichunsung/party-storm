"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = express_1.default();
const apiTitle = "API Route";
api.get('/', (req, res) => {
    res.send(apiTitle);
});
exports.default = api;
//# sourceMappingURL=api.js.map
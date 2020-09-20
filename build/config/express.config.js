"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("../route/api"));
const expressApp = express_1.default();
expressApp.use(body_parser_1.default.urlencoded({ extended: true }));
expressApp.use(body_parser_1.default.json());
const successResponse = {
    status: 200,
    message: 'successful',
    data: {
        id: 1,
        msg: 'data'
    }
};
const notFoundResponse = {
    status: 400,
    message: 'Page Not Found'
};
expressApp.use('/api', api_1.default);
expressApp.get('/', (req, res) => {
    res.status(200).json(successResponse);
});
expressApp.use((req, res, next) => {
    res.status(404).json(notFoundResponse);
});
exports.default = expressApp;
//# sourceMappingURL=express.config.js.map
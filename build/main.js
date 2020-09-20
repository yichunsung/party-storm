"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_1 = __importDefault(require("./config/express.config"));
const PORT = 8080;
const projectName = "Party Storm";
express_config_1.default.listen(PORT, (req, res) => {
    console.log(`Start in ${PORT} for ${projectName}`);
});
//# sourceMappingURL=main.js.map
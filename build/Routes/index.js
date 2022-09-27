"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Links_1 = __importDefault(require("../controllers/Links"));
const Routes = (0, express_1.Router)();
Routes.get("/link/:link", Links_1.default.show);
Routes.get("/links/:email", Links_1.default.index);
Routes.post("/cria-link", Links_1.default.store);
exports.default = Routes;

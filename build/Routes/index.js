"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Arquivos_1 = __importDefault(require("./Arquivos"));
const Routes = (0, express_1.Router)();
Routes.use(Arquivos_1.default);
exports.default = Routes;

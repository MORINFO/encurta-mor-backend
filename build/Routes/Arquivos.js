"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Arquivos_1 = require("../controllers/Arquivos");
const ArquivosRoutes = (0, express_1.Router)();
ArquivosRoutes.get('/arquivos', Arquivos_1.ArquivosController.index);
exports.default = ArquivosRoutes;

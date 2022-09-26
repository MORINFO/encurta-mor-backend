import { Router } from "express";
import { ArquivosController } from "../controllers/Arquivos";

const ArquivosRoutes = Router()

ArquivosRoutes.get('/arquivos', ArquivosController.index)

export default ArquivosRoutes
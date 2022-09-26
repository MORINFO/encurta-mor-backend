import { Router } from "express";
import ArquivosRoutes from "./Arquivos";

const Routes = Router()

Routes.use(ArquivosRoutes)

export default Routes

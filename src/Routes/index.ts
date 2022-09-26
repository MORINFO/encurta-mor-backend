import { Router } from "express";
import LinksController from "../controllers/Links";

const Routes = Router()

Routes.get("/link/:link", LinksController.show)

Routes.get("/links/:email", LinksController.index)

Routes.post("/cria-link", LinksController.store)

export default Routes

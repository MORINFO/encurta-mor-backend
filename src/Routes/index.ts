import { Router } from "express";
import LinksController from "../controllers/Links";
import UsersController from "../controllers/Users";

const Routes = Router()

// ------------- Rotas Links ------------- \\
Routes.get("/link/:link", LinksController.show)
Routes.get("/links/:email", LinksController.index)
Routes.post("/cria-link", LinksController.store)
Routes.delete("/delete-link", LinksController.destroy)


// ------------- Rotas Users ------------- \\
Routes.get("/users", UsersController.index)


export default Routes

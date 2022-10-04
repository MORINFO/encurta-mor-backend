import { Request, Response } from "express";
import prisma from "../Prisma";

class UsersController {

    static async index(req: Request, res: Response) {
        try {
            
            const busca_users = await prisma.usuarios.findMany()

            if (!busca_users) {
                return res.status(500).json({"erro": "erro ao buscar usuarios"})
            }

            return res.json(busca_users)

        } catch (error) {
            return res.status(500).json({"erro": "erro ao buscar usuarios"})
        }
    }
}

export default UsersController
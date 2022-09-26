import { Request, Response } from "express";
import prisma from "../Prisma";

export class ArquivosController {
    static async index(req: Request, res: Response) {

        let busca_arquivos = await prisma.arquivos.findMany()

        return res.json(busca_arquivos)

    }
}
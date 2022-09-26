import { Request, Response } from "express";
import prisma from "../Prisma";

export class ArquivosController {

    static async index(req: Request, res: Response) {
        try {

            let busca_arquivos = await prisma.arquivos.findMany()

            return res.json(busca_arquivos)

        } catch (error) {
            return res.status(400).json(error)
        }

    }

    static async store(req: Request, res: Response) {

        try {

            const { email, nome, link_download, caminho, tamanho, tamanho_completo } = req.body

            if (!nome || !link_download || !tamanho) {
                return res.status(401).json({ "error": "dados incompletos" })
            }

            await prisma.links.create({
                data:{
                    email: email ? email : 'public',
                    Link_download: link_download,
                    nome: nome,
                    
                }
            })
            

            await prisma.arquivos.create({
                data: {
                    email: email ? email : 'public',
                    nome: nome,
                    link_download: link_download,
                    tamanho: tamanho,
                    tamanho_completo: tamanho_completo,
                    caminho: caminho
                }
            })

        } catch (error) {
            return res.status(400).json(error)
        }



    }
}
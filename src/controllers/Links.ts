import { Links } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../Prisma";

export class LinksController {

    static async index(req: Request, res: Response) {
        try {

            const { email } = req.params

            if (!email || email == 'public') {
                return res.status(401).json({ "error": "email ausente" })
            }

            let busca_links = await prisma.usuarios.findFirst({
                where: {
                    email: email
                },
                include:{
                    links:true
                }
            })

            return res.json({
                email: email,
                links: busca_links?.links.filter(item => item.tipo == 'link'),
                files: busca_links?.links.filter(item => item.tipo == 'file')
            })

        } catch (error) {
            return res.status(400).json(error)
        }
    }

    static async show(req: Request, res: Response) {
        try {

            const { link } = req.params

            if (!link) {
                return res.status(401).json({ "error": "link ausente" })
            }

            let busca_links = await prisma.links.findFirst({
                where: {
                    link_encurtado: link
                }
            })

            if (!busca_links) {
                return res.status(404).json({ "error": "link inexistente" })
            }

            return res.json(busca_links)

        } catch (error) {
            return res.status(400).json(error)
        }
    }

    static async store(req: Request, res: Response) {

        try {

            let { email, nome, link, tamanho, tamanho_completo, caminho, tipo } = req.body

            email ? email : email = 'public'

            if (!link) {
                return res.status(401).json({ "error": "link ausente" })
            }

            if (email) {

                let busca_usuarios = await prisma.usuarios.findFirst({
                    where: {
                        email: email
                    }
                })

                if (!busca_usuarios) {
                    await prisma.usuarios.create({
                        data: {
                            email: email
                        }
                    })
                }
            }

            const cria_link = await prisma.links.create({
                data: {
                    email: email,
                    tipo: tipo,
                    nome: nome,
                    link: link,
                    link_encurtado: Math.random().toString(36).substring(2) + Date.now().toString(36),
                    tamanho: tamanho,
                    tamanho_completo: tamanho_completo,
                    caminho: caminho
                }
            })

            return res.json(cria_link)

        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

export default LinksController
import express from "express";
import prisma from "./database";

const app = express()

app.use(express.json())

app.get("/home", async (req, res) => {

    return res.json({"message": "hello"})
})

app.post("/home", async (req, res) => {

    const {email, link } = req.body
    const encurta_link = await prisma.links.create({
        data: {
            email: email,
            link_original: link,
            link_encurtado: '12345'
        }
    })
    return res.json(encurta_link)
})

app.listen(3456, ()=> {console.log('servidor aberto!')})
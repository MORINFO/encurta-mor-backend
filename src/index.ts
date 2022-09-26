import express from "express";
import 'dotenv/config'
import prisma from "./Prisma";

const app = express()

app.use(express.json())

app.get("/home", async (req, res) => {

    return res.json({"message": "hello"})
})

app.get("/home2", async (req, res) => {

    return res.json({"message2": "hello2"})
})

app.get("/prisma", async (req,res) => {

    let busca_arquivos = await prisma.usuario.findMany()

    return res.json(busca_arquivos)
})

app.listen(process.env.PORT, ()=> {console.log('servidor aberto!')})
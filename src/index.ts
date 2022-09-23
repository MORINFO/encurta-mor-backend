import express from "express";
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get("/home", async (req, res) => {

    return res.json({"message": "hello"})
})

app.listen(process.env.PORT, ()=> {console.log('servidor aberto!')})
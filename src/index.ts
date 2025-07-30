import 'dotenv/config';
import express from "express";
import Routes from "./Routes";

const app = express()

app.use(express.json())

app.get("/home", async (req, res) => {

    return res.json({ "message": "hello" })
})

app.use(Routes)

app.listen(process.env.PORT, () => { console.log('servidor aberto!') })
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const axios = require("axios"); 
const { PrismaClient } = require ("@prisma/client");

const prisma = new PrismaClient()
dotenv.config();

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
    res.send("Hello Word");
});

app.get ("/periksa", async (req, res) => {
    const periksa = await prisma.periksa.findMany();

    res.send(periksa)
})

// app.post("/periksa", async (req, res) => {
//     const periksa = await prisma.periksa.create({
//         data : 
//     })
// })

app.listen(PORT, () => {
    console.log("Express API running in port: " + PORT);
});

// imports
import process from "node:process"
import express from "express"
import dotenv from "dotenv"

// ---
const app = express();
dotenv.config()
console.log("port", process.env)
const PORT = process.env.PORT || 2425


app.listen(PORT, () => console.log("listening on port:", PORT))

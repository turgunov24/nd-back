// imports
import process from "node:process";
import express from "express";
import dotenv from "dotenv";
import { a } from "./controllers/index.js";

// ---
const app = express();
dotenv.config();

const PORT = process.env.PORT || 2424;

app.get("/", (req, res) => {
  res.send("hello world from nd with ts working");
});

app.listen(PORT, () => {
  console.log("a",a)
  console.log("listening", PORT);
});

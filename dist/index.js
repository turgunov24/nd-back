// imports
import process from "node:process";
import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { dbConnection } from "./configs/index.js";
// defines
const app = express();
dotenv.config();
const PORT = process.env.PORT || 2424;
// middlewares
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use("/api", routes);
app.listen(PORT, () => {
    dbConnection();
    console.log("listening", PORT);
});

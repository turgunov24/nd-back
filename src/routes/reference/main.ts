// imports
import express, { Router } from "express";

// defines
const router = express.Router();

// routes
router.get("/main", (req, res) => {
  res.send("reference main");
});

export default router;

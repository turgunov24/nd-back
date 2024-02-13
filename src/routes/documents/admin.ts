// imports
import express, { Router } from "express";

// defines
const router = express.Router();

// routes
router.get("/admin", (req, res) => {
  res.send("admin");
});

export default router;

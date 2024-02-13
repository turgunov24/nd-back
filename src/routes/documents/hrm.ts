// imports
import express, { Router } from "express";

// defines
const router = express.Router();

// routes
router.get("/hrm", (req, res) => {
  res.send("hrm");
});

export default router;

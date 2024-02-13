// imports
import express from "express";
import referenceMainRoutes from "./reference/main.js";
import hrmRoutes from "./documents/hrm.js";
import adminRoutes from "./documents/admin.js";
// defines
const router = express.Router();
router.use("/reference", referenceMainRoutes);
router.use("/documents", hrmRoutes);
router.use("/documents", adminRoutes);
export default router;

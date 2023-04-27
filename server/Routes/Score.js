import {createScore,
    getScore} from "../Controller/Score.js";
import protect from "../Middleware/Middleware.js";

import express from "express";
const router = express.Router();

router.post("/create",protect, createScore);
router.get("/get",protect, getScore);

export default router;
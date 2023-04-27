import { createwQuiz,getQuiz,getSpecificQuiz } from "../Controller/Quiz.js";
import protect from "../Middleware/Middleware.js";
import express from "express";


const router = express.Router();

router.post("/create",protect, createwQuiz);
router.get("/get",protect, getQuiz);
router.post("/getSpecific",protect, getSpecificQuiz);

export default router;
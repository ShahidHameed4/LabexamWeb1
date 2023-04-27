
import Quiz from "../Model/Quiz.js";

const createwQuiz = async (req, res) => {
    req.body.userId= req.userId;
    const quiz = req.body;
    const newQuiz = new Quiz(quiz);
    try {
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.find();
        res.status(200).json(quiz);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSpecificQuiz = async (req, res) => {
    const id  = req.body.id;
    try {
        const quiz = await Quiz.find({_id: id});
        res.status(200).json(quiz);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





export {
    createwQuiz,
    getQuiz,
    getSpecificQuiz
} 
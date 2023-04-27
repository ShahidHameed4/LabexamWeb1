import mongoose from "mongoose";

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    quizName: { type: String, required: true },
    quizDescription: { type: String, required: true },
    quizLength: { type: Number, required: true },
    quizQuestions: [{
        question: { type: String, required: true },
        answer: { type: String, required: true },
        option1: { type: String, required: true },
        option2: { type: String, required: true },
        option3: { type: String, required: true },
        option4: { type: String, required: true },
        
    }],
    quizDate: { type: Date, default: Date.now }
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
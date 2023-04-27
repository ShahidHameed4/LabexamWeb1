import mongoose from "mongoose";
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    quizId: { type: String, required: true },
    quizScore: { type: Number, required: true },
    userId: { type: String, required: true },
},
    { timestamps: true }

)



export default mongoose.model("Score", scoreSchema);

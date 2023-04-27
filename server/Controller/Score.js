import Score from "../Model/Score.js";

const createScore = async (req, res) => {
    console.log(req.UserInfo);
    req.body.userId= req.UserInfo._id;

    const score = req.body;
    const newScore = new Score(score);
    try {
        await newScore.save();
        res.status(201).json(newScore);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getScore = async (req, res) => {
    try {
        const score = await Score.find();
        res.status(200).json(score);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
 export {
        createScore,
        getScore
 }
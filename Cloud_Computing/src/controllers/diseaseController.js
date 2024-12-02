const mlService = require("../services/mlService");

exports.getPrediction = async (req, res) => {
    try {
        const file = req.file; // File dari middleware upload
        const prediction = await mlService.getPrediction(file.path);
        res.json(prediction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

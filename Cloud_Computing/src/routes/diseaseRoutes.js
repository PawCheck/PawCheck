const express = require("express");
const router = express.Router();
const diseaseController = require("../controllers/diseaseController");
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); // Middleware untuk upload file

router.post("/predict", upload.single("file"), diseaseController.getPrediction);

module.exports = router;

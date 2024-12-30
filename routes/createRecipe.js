const express = require("express");
const { createRecipe } = require("../controllers/controllers");
const router = express.Router();

router.post("/recipes", createRecipe);

module.exports = router;
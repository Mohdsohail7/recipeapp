const express = require("express");
const { createRecipe, getAllRecipe, getRecipeByTitle, getRecipesByAuthor } = require("../controllers/controllers");
const router = express.Router();

// this path for create new recipe
router.post("/recipes", createRecipe);

// this path for get all recipe data
router.get("/recipes", getAllRecipe);

// this path for get  recipe data by title
router.get("/recipes/:title", getRecipeByTitle);

// this path for get  recipe data by Author
router.get("/recipes/author/:author", getRecipesByAuthor);

module.exports = router;
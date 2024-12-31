const express = require("express");
const { createRecipe, getAllRecipe, getRecipeByTitle, getRecipesByAuthor, getAllRecipeByDifficulty, updateRecipeById, updateRecipeByTitle, deleteRecipeById } = require("../controllers/controllers");
const router = express.Router();

// this path for create new recipe
router.post("/recipes", createRecipe);

// this path for get all recipe data
router.get("/recipes", getAllRecipe);

// this path for get  recipe data by title
router.get("/recipes/:title", getRecipeByTitle);

// this path for get  recipe data by Author
router.get("/recipes/author/:author", getRecipesByAuthor);

// this path for get  recipe data by defficulty
router.get("/recipes/difficulty/:difficulty", getAllRecipeByDifficulty);

// post routes
// this path for post update recipe id
router.post("/recipes/update-recipe", updateRecipeById);

// this path for post update recipe title
router.post("/recipes/update-recipe-title", updateRecipeByTitle);

// this path for post delete recipe id
router.post("/recipes/:id/delete-recipe", deleteRecipeById);

module.exports = router;
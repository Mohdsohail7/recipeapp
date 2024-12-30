const Recipe = require("../models/recipe.model");


async function createRecipe(req, res) {
    try {
        const { title, author, difficulty, prepTime, cookTime, ingredients, instructions, imageUrl } = req.body;
        // data validation
        if (!title || !author || !difficulty || !prepTime || !cookTime || !ingredients || !instructions || !imageUrl) {
            return res.status.json({ error: "Data is required."});
        }
        const createNewRecipe = new Recipe({
            title,
            author,
            difficulty,
            prepTime,
            cookTime,
            ingredients,
            instructions,
            imageUrl
        });
        const savedRecipe = await createNewRecipe.save();
        if (!savedRecipe) {
            return res.status(400).json({ error: "Recipe not Created."});
        }
        return res.status(201).json({message: "Recipe Created Successfully.", recipe: savedRecipe });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", error });
    }
}

module.exports = { createRecipe };
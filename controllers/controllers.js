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

async function getAllRecipe(req, res) {
    try {
        const fetchData = await Recipe.find();
        if (!fetchData) {
            return res.status(404).json({ error: "Recipe data not found."});
        }
        return res.status(200).json({ recipes: fetchData });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", error });
    }
}

async function getRecipeByTitle(req, res) {
    try {
        const { title } = req.params;
        // console.log("title-->", title);
        if (!title) {
            return res.status(400).json({ error: "Title is missing."});
        }
        const findRecipe = await Recipe.find({ title: title });
        if (!findRecipe || findRecipe.length === 0) {
            return res.status(404).json({ error: "Recipe not found by this Title."});
        }
        return res.status(200).json({ recipe: findRecipe });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", error });
    }
}

async function getRecipesByAuthor(req, res) {
    try {
        const { author } = req.params;
        if (!author) {
            return res.status(400).json({ error: "Author is missing."});
        }
        const findRecipeByAuthor = await Recipe.find({ author: author });
        if (!findRecipeByAuthor || findRecipeByAuthor.length === 0) {
            return res.status(404).json({ error: "Recipe not found by this Author."});
        }
        return res.status(200).json({ recipe: findRecipeByAuthor });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", error });
    }
}

module.exports = { createRecipe, getAllRecipe, getRecipeByTitle, getRecipesByAuthor };
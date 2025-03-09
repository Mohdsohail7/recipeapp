// require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./database/db.connect");
const app = express();

// call to database connection
connectToDatabase();

app.use(express.json());

const createRecipeRoute = require("./routes/routes");
const getDataRaoute = require("./routes/routes");
const recipeDataByTitle = require("./routes/routes");
const recipeDataByAuthor = require("./routes/routes");
const reipeDataByDifificulty = require("./routes/routes");
const updateRecipeById = require("./routes/routes");
const updateRecipeByTitle = require("./routes/routes");
const deleteRecipeById = require("./routes/routes");

app.use("/v1/api", createRecipeRoute);
app.use("/v1/api", getDataRaoute);
app.use("/v1/api", recipeDataByTitle);
app.use("/v1/api", recipeDataByAuthor);
app.use("/v1/api", reipeDataByDifificulty);
app.use("/v1/api", updateRecipeById);
app.use("/v1/api", updateRecipeByTitle);
app.use("/v1/api", deleteRecipeById);


// welcome route
app.get("/", (req, res) => {
    res.send(`<h2>Welcome to our Recipe App</h2>`);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
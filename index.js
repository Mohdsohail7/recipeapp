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

app.use("/v1/api", createRecipeRoute);
app.use("/v1/api", getDataRaoute);
app.use("/v1/api", recipeDataByTitle);
app.use("/v1/api", recipeDataByAuthor);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
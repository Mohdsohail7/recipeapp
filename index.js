// require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./database/db.connect");
const app = express();

// call to database connection
connectToDatabase();

app.use(express.json());

const createRecipeRoute = require("./routes/createRecipe");

app.use("/v1/api", createRecipeRoute);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
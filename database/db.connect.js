const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDatabase() {
    const mongoUri = process.env.MONGODBURL;
    await mongoose.connect(mongoUri).then(() => {
        console.log("Database connected successfully.");
    }).catch ((error) => {
        console.log("Failed to connect database.", error);
    });
}
module.exports = { connectToDatabase };
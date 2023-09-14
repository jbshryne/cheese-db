const mongoose = require("../db/connection")

const CheeseSchema = new mongoose.Schema({
    name: String, 
    origin: String, 
    description: String, 
    image: String
})

const Cheese = mongoose.model("Cheese", CheeseSchema)

module.exports = Cheese
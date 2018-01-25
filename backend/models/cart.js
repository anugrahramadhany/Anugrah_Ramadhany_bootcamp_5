const mongoose = require("mongoose");

mon.connect("mongodb://localhost:27017/bootcampday5")
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    id: String
})

const cart = mongoose.model("cart", cartSchema)

module.exports = cart;
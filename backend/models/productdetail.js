const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bootcampday5");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    nama : String,
    kategori : String,
    harga : Number, 
    warna : String,
    ukuran : String,
    gambar : String
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
const express = require("express");
const bodyParser = require("body-parser");
const productDetailRoutes = require("./routes/productdetail");
const fileUpload = require("express-fileupload");

const app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(fileUpload());
app.use(express.static('public'));

app.use("/api/product", productDetailRoutes);

app.listen((3000),()=>{
    console.log("tersambung")
});
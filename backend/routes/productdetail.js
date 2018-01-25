const express = require("express");
const Productdetail = require("../models/productdetail");
const http = require("http")
const url = require("url")
const router = express.Router();

router.get("/:  ", (req, res) => {
    Productdetail.findById(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})


router.get("/", (req, res) => {
    Productdetail.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
});

router.get("/accessories", (req, res) => {
    Productdetail.find({ kategori: "accessories" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/denim", (req, res) => {
    Productdetail.find({ kategori: "denim" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/footwear", (req, res) => {
    Productdetail.find({ kategori: "footwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
            
        } else {
            res.json(result);
        }
    });
})

router.get("/jeans", (req, res) => {
    Productdetail.find({ kategori: "jeans" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/outerwear", (req, res) => {
    Productdetail.find({ kategori: "outwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/pants", (req, res) => {
    Productdetail.find({ kategori: "pants" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/shirts", (req, res) => {
    Productdetail.find({ kategori: "shirts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/t-shirts", (req, res) => {
    Productdetail.find({ kategori: "t-shirts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/shorts", (req, res) => {
    Productdetail.find({ kategori: "shorts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.post("/", (req, res) => {
    if (!req.files.gambar) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.gambar;
    let date = new Date();
    let imageName = date.getTime() + ".png";

    image.mv("./public/gambar/" + imageName, (error) => {
        let newObj = new Productdetail({
            nama: req.body.nama,
            kategori: req.body.kategori,
            harga: req.body.harga,
            warna: req.body.warna,
            ukuran: req.body.ukuran,
            gambar: "http://localhost:3000/gambar/" + imageName
        });

        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(newObj);
            }
        })
    });
});

router.delete("/:id", (req, res) => {
    Productdetail.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json({ message: "Data deleted" });
        }
    });
});

router.delete("/", (req, res) => {
    Productdetail.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json({ message: "Data deleted" });
        }
    });
});

router.get("/cart", (req, res) => {
    Produk.find({ status: "" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})


router.post("/cartlist", (req, res) => {
    
       
            let newCart = new Cart({
                id: req.body.id
            });
    
            newCart.save((error) => {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.json(newCart);
                }
            });
    });


    router.delete("/cartlist/:id", (req, res) => {
        Cart.findByIdAndRemove(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json({ message: "Data deleted" });
            }
        });
    });


    router.delete("/cartlist", (req, res) => {
        Cart.remove({}, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json({ message: "Data deleted" });
            }
        });
    });

    

module.exports = (function () {
    return router;
})();
const express = require("express");
const router = express.Router();
const Product = require('../models/product.model');
const isAdmin = require('../middlewares/isAdmin');
const isAdminOrManager = require('../middlewares/isAdminOrManager');

router.post("/add",isAdmin, async(req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
         res.status(400).send(error.message);
    }
})

router.patch("/updateProduct/:id",isAdminOrManager, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(product === null) return res.status(204);

    product = await Product.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({msg:"product updated"});

  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    let docs = await Product.find().exec();
    res.status(200).json(docs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const productModel = require('../models/product');

// GET ALL PRODUCTS
router.get("/all", async (_req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({ message: "Products fetched", products });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);

        if (!product)
            return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product fetched", product });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CREATE PRODUCT
router.post("/create", async (req, res) => {
    try {
        const newProduct = await productModel.create(req.body);

        res.json({ message: "Product created", product: newProduct });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE PRODUCT
router.patch("/update/:id", async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedProduct)
            return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product updated", product: updatedProduct });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE PRODUCT
router.delete("/remove/:id", async (req, res) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);

        if (!deletedProduct)
            return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product deleted", product: deletedProduct });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

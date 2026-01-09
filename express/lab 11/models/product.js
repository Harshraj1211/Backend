const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productname: String,
    mfgDate: Date,
    productPrice: Number,
    productId: Number
}, { timestamps: true });

module.exports = mongoose.model("products", productSchema);

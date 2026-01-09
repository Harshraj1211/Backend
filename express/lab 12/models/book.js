const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookname: String,
    avalableQuantity: Number,
    author: {
        type:String,
        require:true
    },
    bookId: Number
}, { timestamps: true });

module.exports = mongoose.model("book", bookSchema);

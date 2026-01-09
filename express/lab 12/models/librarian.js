const mongoose = require('mongoose');

const librarianSchema = mongoose.Schema({
    librarianname: String,
    email: { type: String, unique: true, required: true },
    password: String,
    librarianId: Number
}, { timestamps: true });

module.exports = mongoose.model("librarian", librarianSchema);

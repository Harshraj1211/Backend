const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true, required: true },
    password: String,
    userId: Number
}, { timestamps: true });

module.exports = mongoose.model("libraryuser", userSchema);
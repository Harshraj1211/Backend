const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    studentname: String,
    email: { type: String, unique: true, required: true },
    password: String,
    studentId: Number
}, { timestamps: true });

module.exports = mongoose.model("students", studentSchema);

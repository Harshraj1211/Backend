const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    facultyname: String,
    email: { type: String, unique: true, required: true },
    password: String,
    facultyId: Number
}, { timestamps: true });

module.exports = mongoose.model("faculties", facultySchema);

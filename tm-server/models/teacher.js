const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    //   email: { type: String, required: true },
    age: { type: Number, required: true, default: 0 },
    gender: { type: Number, required: true, default: 1 },
    teachAge: { type: Number, required: true, default: 1 },
    avatar: { type: String, required: true, default: "" }
});

module.exports = mongoose.model("teachers", teacherSchema);
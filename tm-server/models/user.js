const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, default: 0 },
    gender: { type: Number, default: 1 } // 1 - 男  0 - 女
});

module.exports = mongoose.model("users", UserSchema);
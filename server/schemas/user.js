const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            minlenght: 3,
            unique: false
        },
        age: {
            type: Number,
            minlength: 1,
            unique: false
        },
        email:{
            type: String,
            minlength: 3,
            unique: true
        },
        password: {
            type: String,
            minlength: 6,
            unique: false
        }
    }
)

const user = mongoose.model("user", userSchema);
module.exports = user;
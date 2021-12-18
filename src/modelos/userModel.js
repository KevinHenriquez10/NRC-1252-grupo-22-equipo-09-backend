const {model, Schema} = require("mongoose");
require("dotenv");
const {genSalt, hash} = require("bcrypt");

const userSchema = new Schema({
    usuario:{
        type:"string",
        required:true,
        max:50
    },
    password:{
        type:"string",
        required:true,
        min:6
    },
    rol:{
        type:"string",
        required:true
    }
});

userSchema.pre("save", async function (next) {
    this.password = await hash(this.password, Number(process.env.BCRYPT_ROUNDS));
    next();
})

const userModel = model("users", userSchema);

exports.userModel = userModel;
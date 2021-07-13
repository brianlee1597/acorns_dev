import mongoose from "mongoose"

const User = new Mongoose.Schema({
    username: String,
    password: String,
    email: String
})

export default mongoose.model("User", User)
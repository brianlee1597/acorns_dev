import mongoose from "mongoose"

const User = new mongoose.Schema({ //mongoDB schema for user
    username: String,
    password: String,
    email: String
})

export default mongoose.model("User", User)
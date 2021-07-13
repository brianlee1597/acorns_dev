import Mongoose from "mongoose"

const User = new Mongoose.Schema({
    username: String,
    password: String,
    email: String
})

export default Mongoose.model("User", User)
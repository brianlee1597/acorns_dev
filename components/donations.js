import mongoose from "mongoose"

const donation = new mongoose.Schema({
    imageurl: String,
    artist: String,
    category: String,
    totalrequired: Number,
    totaldonated: Number,
    title: String
})

export default mongoose.model("donation", donation)
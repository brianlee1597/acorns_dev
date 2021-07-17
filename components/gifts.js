import mongoose from "mongoose"

const allGifts = new mongoose.Schema({
    artist: String,
    imageurl: String,
    title: String,
    type: String,
    user: String,
    amountpaidsofar: Number,
    amountneeded: Number,
    paidtoneededratio: Number,
    dateending: Number
})

export default mongoose.model("Gift", allGifts)
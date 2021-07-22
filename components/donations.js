import mongoose from "mongoose"

const Donations = new mongoose.Schema({
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

export default mongoose.model("Donation", Donations)
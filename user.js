import mongoose from "mongoose"

const User = new mongoose.Schema({ //mongoDB schema for user
    email: String,
    password: String,
    bias: String,
    backgroundcolor: String
})

export default mongoose.model("User", User)

export const userBiasSettings = new Map([
    ['Aespa', 'linear-gradient(to bottom, #e55d87, #5fc3e4)'],
    ['BTS', 'linear-gradient(to bottom, #654ea3, #eaafc8)'],
    ['Blackpink', 'linear-gradient(to top, #fffcdc, #d9a7c7)']
])
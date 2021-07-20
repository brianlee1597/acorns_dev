import express from "express"
import path from "path"
import morgan from "morgan"
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import cookieParser from "cookie-parser"
import localPassportConfig from './local-passport-config.js'
import GETAPIs from './getapis.js'
import POSTAPIs from './postapis.js'
import mongoose from "mongoose"

const app = express();
const __dirname = path.resolve()

//Connect to database
mongoose.connect("mongodb+srv://BrianLee:adgj1597@cluster0.bpsak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB is connected.")
})

// mongoose.connection.once('open', async () => {

//     for(let i = 0; i < 20; i++) {

//         const amountpaid = Math.floor(Math.random() * 100000)
//         const amountneed = Math.floor(Math.random() * 150000)

//         const gift = new allGifts({
//             artist: 'G-Dragon',
//             imageurl: 'https://image.kpopmap.com/2019/02/5726ce5c749f45cc8e4e0e42f8f2f9d2.jpeg',
//             title: `Can't forget the legend ${i}`,
//             type: "삐탁하게",
//             user: 'fiery_gangster_dragon',
//             amountpaidsofar: amountpaid,
//             amountneeded: amountneed,
//             paidtoneededratio: amountpaid / amountneed * 100,
//             dateending: '77'
//         })

//         await gift.save()
//         console.log(i)
//     }
// })

/* ---------- All App Use functions ---------- */

app.use(morgan('tiny')) //outputs request/response times on terminal
app.use(express.json()) //for communicating with Frontend with JSON
app.use(express.static(path.join(__dirname, 'client/build'))) //routing to client folder (for elastic beanstalk)
app.use(express.urlencoded({ extended: false })) //for login authentication functions setting

app.use(cors({ //for local development, to make sure that localhost:3000 is not rejected
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({ //user session cookie/cache settings
    secret: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser('https://www.youtube.com/watch?v=dQw4w9WgXcQ')) //parsing cookie for session

app.use(passport.initialize())
app.use(passport.session())
localPassportConfig(passport) //login auth package

GETAPIs(app) //connecting all GET API functions from getapi.js
POSTAPIs(app) //connecting all POST API functions from postapi.js

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

/* ----- REACT SERVE (Make sure this is below all other api routes) ----- */
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

/* ----- DEV ----- */
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Server started successfully on: http://localhost:" + port)
})
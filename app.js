import express from "express"
import path from "path"
import morgan from "morgan"
import cors from 'cors'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import session from 'express-session'
import cookieParser from "cookie-parser"
import { chartData } from './tempdb.js'
import User from './user.js'
import localPassportConfig from './local-passport-config.js'
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

/* ---------- All App Use functions ---------- */

app.use(morgan('tiny')) //outputs request/response times on terminal
app.use(express.json()) //for communicating with Frontend with JSON
app.use(express.static(path.join(__dirname, 'client/build'))) //routing to client folder (for elastic beanstalk)
app.use(express.urlencoded({ extended: false })) //for login authentication functions setting

app.use(cors({ //for local development, to make sure that localhost:3000 is not rejected
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({ //session cookie/cache settings
    secret: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser('https://www.youtube.com/watch?v=dQw4w9WgXcQ')) //parsing cookie for session

app.use(passport.initialize())
app.use(passport.session())
localPassportConfig(passport) //login auth package

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// /* ----- GET, POST methods ----- */
app.post('/register', (req, res) => { //register submit function, checks if user already exists, if not make new user
    req.socket.setTimeout(10000, () => { res.status(500).end() }) //if request doesn't respond, terminate after 10 sec
    try {
        User.findOne({username: req.body.username}, async (err, doc) => { //find duplicate user in the database if exists
            if (err) throw err
            if (doc) res.json("userexists") // doc = user already exists
            if (!doc) {
                const encryptedPassword = await bcrypt.hash(req.body.password, 10)
                const newUser = new User({
                    username: req.body.username,
                    password: encryptedPassword,
                    email: req.body.email
                })
                await newUser.save() //upload new user to database
                res.json("usercreated")
            }
        })
    } catch {
        res.json("failedpost")
    }
})

app.post('/login', (req, res, next) => { //login function 
    req.socket.setTimeout(10000, () => { res.status(500).end() }) //if request doesn't respond, terminate after 10 sec
    try {
        passport.authenticate('local', (error, user, info) => { //authenticate user using passport
            if (error) throw error
            if (!user) res.json('nouser')
            else {
                req.logIn(user, error => {
                    if (error) throw error
                    res.json('authenticated')
                })
            }
        })(req, res, next)
    } catch {
        res.json("failedpost")
    }
})

/* ----- API call from React methods ----- */
app.get('/api/chartdata', (req, res) => {
    res.send(chartData)
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
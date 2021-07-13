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
import Mongoose from "mongoose"

const app = express();
const __dirname = path.resolve()

Mongoose.connect("mongodb+srv://BrianLee:adgj1597@cluster0.bpsak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Mongoose is connected.")
})
/* ---------- App Use ---------- */
app.use(morgan('tiny'))

app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.urlencoded({ extended: true }))

// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
// }))

app.use(session({
    secret: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
import localPassportConfig from './local-passport-config.js'
localPassportConfig(passport)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// /* ----- GET, POST ----- */
app.post('/register-local', (req, res) => {
    try {
        User.findOne({username: req.body.username}, async (err, doc) => {
            if (err) throw err
            if (doc) res.json("userexists")
            if (!doc) {
                const encryptedPassword = await bcrypt.hash(req.body.password, 10)
                const newUser = new User({
                    username: req.body.username,
                    password: encryptedPassword,
                    email: req.body.email
                })
                await newUser.save()
                res.json("usercreated")
            }
        })
    } catch {
        res.json("failedpost")
    }
})

app.post('/login-local', (req, res, next) => {
    try {
        passport.authenticate('local', (error, user, info) => {
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

/* ----- API's ----- */
app.get('/api/chartdata', (req, res) => {
    res.send(chartData)
})

/* ----- REACT SERVE (Make sure this is below all other api routes) ----- */
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

/* ----- DEV ----- */
let PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server started successfully on: http://localhost:" + PORT)
})
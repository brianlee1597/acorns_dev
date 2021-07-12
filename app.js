import express from "express"
import path from "path"
import morgan from "morgan"
import { chartData } from './tempdb.js'

const app = express();
const __dirname = path.resolve()

/* ---------- App Use ---------- */
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// /* ----- GET, POST ----- */
// app.post('/login', passport.authen)

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
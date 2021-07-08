import express from "express";
import path from "path"
import morgan from "morgan"

const app = express();
const __dirname = path.resolve();

/* ---------- App Use ---------- */
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
/* ---------- App Use ---------- */


app.get('/', (req, res) => {
  res.send("Hello")
})

let PORT = process.env.PORT || 9000
app.listen(PORT, function() {
 console.log("Server started successfully on: " + PORT);
});
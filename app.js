import express from "express";
import path from "path"
const app = express();
const __dirname = path.resolve();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  console.log("Initiated")
})

let PORT = process.env.PORT || 9000
app.listen(PORT, function() {
 console.log("Server started successfully on: " + PORT);
});
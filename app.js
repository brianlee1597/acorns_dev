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

app.get("/api/test", function(req, res) {
  res.send("Testing");
});

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully on: " + port);
});
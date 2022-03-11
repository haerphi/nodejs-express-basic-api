var express = require("express");
var app = express();

const {APP_PORT, PORT} = process.env;
const port = APP_PORT || PORT || 8080;

console.log(process.env);

app.use("/static", express.static("public"));

app.get("/timeout", function (req, res) {
    const delay = 60;
    console.log("timeout incoming !");
    setTimeout(() => {
        res.send(`Timeout of ${delay}s`);
    }, delay * 1000);
});

app.get("/timeout10", function (req, res) {
    const delay = 10;
    console.log("timeout incoming !");
    setTimeout(() => {
        res.send(`Timeout of ${delay}s`);
    }, delay * 1000);
});

app.get("/", function (req, res) {
    res.send("Hello world");
});

app.listen(port, function () {
    console.log("http://localhost:8080");
});

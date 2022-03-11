const express = require("express");
const bodyParser = require("body-parser");

const {APP_PORT, PORT} = process.env;
const port = APP_PORT || PORT || 8080;

console.log(process.env);

// Setup express
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

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

app.use((req, res, next) => {
    console.log("Middleware");
    if (req.headers.authorization) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
});

app.get("/private", function (req, res) {
    res.send("Private route");
});

app.listen(port, function () {
    console.log("http://localhost:8080");
});

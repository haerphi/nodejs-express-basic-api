var express = require("express");
var app = express();

app.use("/static", express.static("public"));

app.get("/timeout", function(req, res) {
  const delay = 60;
  setTimeout(() => {
    res.send(`Timeout of ${delay}s`);
  }, delay * 1000);
});

app.listen(8080, function() {
  console.log("http://localhost:8080");
});

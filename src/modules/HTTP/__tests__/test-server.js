const express = require("express");
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/api/v2/test", (req, res) => {
    res.send("hello from server");
});

app.post("/api/v2/test", (req, res) => {
    res.send("hello from server");
});

app.put("/api/v2/test", (req, res) => {
    res.send("hello from server");
});

app.delete("/api/v2/test", (req, res) => {
    res.send("hello from server");
});

module.exports = app;

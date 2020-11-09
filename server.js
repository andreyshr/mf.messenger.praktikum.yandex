const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

app.use("/", express.static(path.join(__dirname, "static")));

app.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname, "static/index.html"))
);

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});

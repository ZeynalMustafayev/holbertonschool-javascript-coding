const express = require("express");
const app = express()

port = 1245;

app.get("/", (_, res) => {
    res.send("Hello Holberton School!")
})

app.listen(port, () => {
    console.log(port)
})

module.exports = app
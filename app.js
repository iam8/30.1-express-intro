// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

const express = require("express");
const app = express();


app.get("/mean", (req, res) => {
    return res.send("You have reached the mean page");
})

app.get("/median", (req, res) => {
    return res.send("You have reached the median page");
})

app.get("/mode", (req, res) => {
    return res.send("You have reached the mode page");
})





app.listen(3000, "127.0.0.1", () => {
    console.log("App running on 127.0.0.1, port 3000");
})

// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

const express = require("express");
const app = express();


app.get("/mean", (req, res) => {

    const queryStr = req.query["nums"];

    // Case: empty or missing query string
    if (!queryStr) {
        return res.json({
            operation: "mean",
            value: "None"
        })
    }

    const nums = queryStr.split(",");

    // Calculate sum of the nums
    const sum = nums.reduce((accum, curr) => {
        return accum + (+curr);
    }, 0);

    return res.json({
        operation: "mean",
        value: sum / nums.length
    });
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

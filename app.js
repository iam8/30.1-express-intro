// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

/** Application for calculating the mean, median, or mode of a list of numbers. */

const express = require("express");
const app = express();
const ExpressError = require("./expressError");


app.get("/mean", (req, res) => {

    const queryStr = req.query["nums"];

    try {
        // Case: empty or missing query string
        if (!queryStr) {
            throw new ExpressError("Query parameter 'num' is required.", 400);
        }
    } catch(err) {
        return next(err);
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


// Handler for 404 errors
app.use((req, res, next) => {
    const notFoundError = new ExpressError("Page not found!", 404);
    return next(notFoundError);
})

// Global error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;

    // Set status and alert the user
    return res.status(status).json({
        error: {message, status}
    })
})

app.listen(3000, "127.0.0.1", () => {
    console.log("App running on 127.0.0.1, port 3000");
})

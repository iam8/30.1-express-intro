// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

/** Application for calculating the mean, median, or mode of a list of numbers.
 *
 * TODO: use every() or some() function to check that all query params are numbers; put this into
 * a helper function.
 *
*/

const express = require("express");
const app = express();
const ExpressError = require("./expressError");


app.get("/mean", (req, res, next) => {

    const queryStr = req.query["nums"];

    try {
        // Case: empty or missing query string
        if (!queryStr) {
            throw new ExpressError("Query parameter 'nums' is required.", 400);
        }

    } catch(err) {
        return next(err);
    }

    const nums = queryStr.split(",");
    let sum;

    // Calculate sum of the nums
    sum = nums.reduce((accum, curr) => {
        return accum + (+curr);
    }, 0);

    try {
        if (isNaN(sum)) {
            throw new ExpressError("Nums must contain only numbers.", 400);
        }

    } catch(err) {
        return next(err);
    }

    return res.json({
        operation: "mean",
        value: sum / nums.length
    });
})

app.get("/median", (req, res, next) => {

    const queryStr = req.query["nums"];

    try {
        // Case: empty or missing query string
        if (!queryStr) {
            throw new ExpressError("Query parameter 'nums' is required.", 400);
        }

    } catch(err) {
        return next(err);
    }

    const nums = queryStr.split(",");

    // Find middle value in nums list
    let midVal;

    if (nums.length % 2 === 1) {

        // Case: odd-length nums list
        midVal = nums[Math.floor(nums.length / 2)];
    } else {

        // Case: even-length nums list
        const midVal1 = +nums[nums.length / 2 - 1];
        const midVal2 = +nums[nums.length / 2];

        midVal = (midVal1 + midVal2) / 2;
    }

    midVal = +midVal;

    try {
        if (isNaN(midVal)) {
            throw new ExpressError("Nums must contain only numbers.", 400);
        }

    } catch(err) {
        return next(err);
    }

    return res.json({
        operation: "median",
        value: midVal
    });
})

app.get("/mode", (req, res, next) => {

    const queryStr = req.query["nums"];

    try {
        // Case: empty or missing query string
        if (!queryStr) {
            throw new ExpressError("Query parameter 'nums' is required.", 400);
        }

    } catch(err) {
        return next(err);
    }

    const nums = queryStr.split(",");
    const freqMap = new Map();
    let mode = nums[0];

    // Map each number to its frequency
    for (let num of nums) {
        const freq = freqMap.get(num);

        if (freq === undefined) {
            freqMap.set(num, 1);
        } else {
            freqMap.set(num, freq + 1);
        }

        // Update mode
        if (freqMap.get(num) > mode) {
            mode = num;
        }
    }

    mode = +mode;

    try {
        if (isNaN(mode)) {
            throw new ExpressError("Nums must contain only numbers.", 400);
        }

    } catch(err) {
        return next(err);
    }

    return res.json({
        operation: "mode",
        value: mode
    });
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

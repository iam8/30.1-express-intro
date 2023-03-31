// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

/** Application for calculating the mean, median, or mode of a list of numbers.
 *
 * TODO: place the identical try/catch blocks in helper function
 *
*/

const express = require("express");
const app = express();
const ExpressError = require("./expressError");


// HELPERS ----------------------------------------------------------------------------------------

/**
 * Return true if all elements in the given array are numbers and false otherwise.
 */
function areAllNumbers(array) {
    return array.every((element) => {
        return !isNaN(+element);
    })
}

/**
 * Calculate the mean of an array of numbers.
 */
function calculateMean(nums) {
    let sum;

    // Calculate sum of the array
    sum = nums.reduce((accum, curr) => {
        return accum + (+curr);
    }, 0);

    return sum / nums.length;
}

/**
 * Calculate the median of an array of numbers.
 */
function calculateMedian(nums) {

    // Sort array: ascending order
    nums.sort((a, b) => {return a - b});

    // Find middle value in nums list
    let midVal;

    if (nums.length % 2 === 1) {

        // Case: odd-length nums list
        midVal = +nums[Math.floor(nums.length / 2)];
    } else {

        // Case: even-length nums list
        const midVal1 = +nums[nums.length / 2 - 1];
        const midVal2 = +nums[nums.length / 2];

        midVal = (midVal1 + midVal2) / 2;
    }

    return midVal;
}

/**
 * Calculate the mode of an array of numbers.
 */
function calculateMode(nums) {
    const freqMap = new Map();
    let mode = +nums[0];

    // Map each number to its frequency
    for (let num of nums) {
        const freq = freqMap.get(+num);

        if (freq === undefined) {
            freqMap.set(+num, 1);
        } else {
            freqMap.set(+num, freq + 1);
        }

        // Update mode
        if (freqMap.get(+num) > mode) {
            mode = +num;
        }
    }

    return mode;
}

// ------------------------------------------------------------------------------------------------


// ROUTES -----------------------------------------------------------------------------------------

app.get("/mean", (req, res, next) => {

    const queryStr = req.query["nums"];
    let nums;

    try {

        // Case: query string empty or missing
        if (!queryStr) {
            throw new ExpressError("Query parameter 'nums' is required.", 400);
        }

        nums = queryStr.split(",");

        // Case: one or more nums elements cannot be converted to a number
        if (!areAllNumbers(nums)) {
            throw new ExpressError("Nums must contain only numbers.", 400);
        }

    } catch(err) {
        return next(err);
    }

    const mean = calculateMean(nums);

    return res.json({
        operation: "mean",
        value: mean
    });
})

app.get("/median", (req, res, next) => {

    const queryStr = req.query["nums"];
    let nums;

    try {

        // Case: query string empty or missing
        if (!queryStr) {
            throw new ExpressError("Query parameter 'nums' is required.", 400);
        }

        nums = queryStr.split(",");

        // Case: one or more nums elements cannot be converted to a number
        if (!areAllNumbers(nums)) {
            throw new ExpressError("Nums must contain only numbers.", 400);
        }

    } catch(err) {
        return next(err);
    }

    const median = calculateMedian(nums);

    return res.json({
        operation: "median",
        value: median
    });
})

app.get("/mode", (req, res, next) => {

    const queryStr = req.query["nums"];
    let nums;

    try {

        // Case: query string empty or missing
        if (!queryStr) {
            throw new ExpressError("Query parameter 'nums' is required.", 400);
        }

        nums = queryStr.split(",");

        // Case: one or more nums elements cannot be converted to a number
        if (!areAllNumbers(nums)) {
            throw new ExpressError("Nums must contain only numbers.", 400);
        }

    } catch(err) {
        return next(err);
    }

    // const freqMap = new Map();
    // let mode = nums[0];

    // // Map each number to its frequency
    // for (let num of nums) {
    //     const freq = freqMap.get(num);

    //     if (freq === undefined) {
    //         freqMap.set(num, 1);
    //     } else {
    //         freqMap.set(num, freq + 1);
    //     }

    //     // Update mode
    //     if (freqMap.get(num) > mode) {
    //         mode = num;
    //     }
    // }

    const mode = calculateMode(nums);

    return res.json({
        operation: "mode",
        value: mode
    });
})

// ------------------------------------------------------------------------------------------------


// ERROR HANDLERS ---------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------


app.listen(3000, "127.0.0.1", () => {
    console.log("App running on 127.0.0.1, port 3000");
})

// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

/** Unit tests for mean, median, and mode Express application. */

const {
    areAllNumbers,
    calculateMean,
    calculateMedian,
    calculateMode,
    validateQueryString
} = require("./app");


describe("Tests for areAllNumbers function", () => {

    test("Should return false for empty array input", () => {
        const res = areAllNumbers([]);
        expect(res).toEqual(false);
    })

    test("Should return true for all numerical inputs", () => {

    })

    test("Should return true for number string inputs", () => {

    })

    test("Should return false for all non-numerical inputs", () => {

    })

    test("Should return false if only one input is non-numerical", () => {

    })

})


describe("Tests for calculateMean function", () => {

})


describe("Tests for calculateMedian function", () => {

})


describe("Tests for calculateMode function", () => {

})


describe("Tests for validateQueryString function", () => {

})

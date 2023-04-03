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
        const res = areAllNumbers([-3, -1.5, 0, 1.5, 3]);
        expect(res).toEqual(true);
    })

    test("Should return true for number string inputs", () => {
        const res = areAllNumbers(["-7", "-2.5", "0", "2.5", "7"]);
        expect(res).toEqual(true);
    })

    test("Should return false for all non-numerical inputs", () => {
        const res = areAllNumbers(["blah", "string", {}, [], true]);
        expect(res).toEqual(false);
    })

    test("Should return false if only one input is non-numerical", () => {
        const res = areAllNumbers([0, 1, 2, "psych"]);
        expect(res).toEqual(false);
    })

})


describe("Tests for calculateMean function", () => {

    test("Should throw ValueError if input array is empty", () => {
        expect(() => {
            calculateMean([]);
        }).toThrow(TypeError);
    })

})


describe("Tests for calculateMedian function", () => {

    test("Should throw ValueError if input array is empty", () => {
        expect(() => {
            calculateMedian([]);
        }).toThrow(TypeError);
    })

})


describe("Tests for calculateMode function", () => {

    test("Should throw ValueError if input array is empty", () => {
        expect(() => {
            calculateMode([]);
        }).toThrow(TypeError);
    })

})


describe("Tests for validateQueryString function", () => {

})

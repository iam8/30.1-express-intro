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

    test("Should calculate mean correctly for single element input", () => {
        const res = calculateMean([1]);
        expect(res).toEqual(1);
    })

    test("Should calculate mean correctly for negative number inputs", () => {
        const res = calculateMean([-10, -5, -1, -100, -2]);
        expect(res).toEqual(-23.6);
    })

    test("Should calculate mean correctly for positive number inputs", () => {
        const res = calculateMean([1, 2, 3, 4, 5, 6]);
        expect(res).toEqual(3.5);
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

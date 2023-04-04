// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

/** Unit tests for mean, median, and mode Express application. */

const {
    areAllNumbers,
    calculateMean,
    calculateMedian,
    calculateMode,
    validateNumsQueryString
} = require("./app");

const ExpressError = require("./expressError");


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

    test("Should calculate median correctly for single element input", () => {
        const res = calculateMedian([1]);
        expect(res).toEqual(1);
    })

    test("Should calculate median correctly for sorted, even-length inputs", () => {
        const res = calculateMedian([-10, -3, -1, 0, 3, 7]);
        expect(res).toEqual(-0.5);
    })

    test("Should calculate median correctly for sorted, odd-length inputs", () => {
        const res = calculateMedian([-10, -3, -1, 3, 7]);
        expect(res).toEqual(-1);
    })

    test("Should calculate median correctly for unsorted, even-length inputs", () => {
        const res = calculateMedian([2, -7, 3, -12]);
        expect(res).toEqual(-2.5);
    })

    test("Should calculate median correctly for unsorted, odd-length inputs", () => {
        const res = calculateMedian([2, -7, 5, 1, -13]);
        expect(res).toEqual(1);
    })
})


describe("Tests for calculateMode function", () => {

    test("Should throw ValueError if input array is empty", () => {
        expect(() => {
            calculateMode([]);
        }).toThrow(TypeError);
    })

    test("Should calculate mode correctly for single element input", () => {
        const res = calculateMode([1]);
        expect(res).toEqual(1);
    })

    test("Should calculate mode correctly for input with a single, clear mode", () => {
        const res = calculateMode([-2, -3, -4, 1, 2, 2, 2, 7]);
        expect(res).toEqual(2);
    })

    test("Should choose mode correctly for input with 2 modes of equal frequency", () => {
        const res = calculateMode([-2, 7, -3, 7, -4, 7, 1, 2, 2, 2]);
        expect(res).toEqual(7);
    })

    test("Should choose mode correctly for input with all numbers of equal frequency", () => {
        const res = calculateMode([9, 1, 2, 3, 4, 5, 6]);
        expect(res).toEqual(9);
    })
})


describe("Tests for validateNumsQueryString function", () => {

    test("Should throw an ExpressError if no query string is given", () => {
        expect(() => {
            validateNumsQueryString();
        }).toThrow(ExpressError);
    })

    test("Should throw an ExpressError if query string is empty", () => {
        expect(() => {
            validateNumsQueryString("");
        }).toThrow(ExpressError);
    })

    test("Should throw an ExpressError if query string contains a non-numerical element", () => {
        expect(() => {
            validateNumsQueryString("1,2,3,string");
        }).toThrow(ExpressError);
    })

    test("Should not throw an ExpressError if query string is valid", () => {
        expect(() => {
            validateNumsQueryString("1,2,3,4");
        }).not.toThrow(ExpressError);
    })
})

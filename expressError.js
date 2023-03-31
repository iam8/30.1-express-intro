// Ioana A Mititean
// Exercise 30.1 - Express Routing/Calculator Exercise

/** Custom error class for Express. */


class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}


module.exports = ExpressError;

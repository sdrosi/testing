var test = require("./testing.js");

test.assert(6, add(3,3), "3 + 3 === 6")

function add(a,b) {
    return a + b
}

test.assert(10, sub(20,10), "20 - 10 === 10")

function sub(c,d) {
    return c - d
}

test.assert(25, mult(5,5), "5 * 5 === 25")

function mult(e,f) {
    return e * f
}
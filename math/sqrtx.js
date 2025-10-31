/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    // Try binary search afterwards

    if (x < 2) return x

    for (let i = 0; i < x; i++) {
        if (i * i === x) {
            return i
        } else if (i * i > x) {
            return (i - 1)
        }
    }
};
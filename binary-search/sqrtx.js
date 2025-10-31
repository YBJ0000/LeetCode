/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0
    if (x === 1) return 1
    if (x === 2) return 1

    for (i = 0; i < x; i++) {
        if (i * i === x) {
            return i
        } else if (i * i > x) {
            return (i - 1)
        }
    }
};
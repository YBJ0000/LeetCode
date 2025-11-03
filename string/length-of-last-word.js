/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    // find the position of last non-space char
    let p = s.length - 1

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            p = i
            break
        }
    }

    let count = 0
    for (let i = p; i >= 0; i--) {
        if (s[i] !== " ") {
            count++
        } else {
            break
        }
    }

    return count
};
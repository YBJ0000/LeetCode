/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    /*
    Create a dictionary to map Symbols to values
    Iterate through the string from left to right:
        - If current value less than the next value, substract the current value
        - Otherwise, add the current value
    Time complexity: O(n)
    */

    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let total = 0

    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]]
        const next = map[s[i + 1]]

        if (current < next) {
            total = total - current
        } else {
            total = total + current
        }
    }

    return total
};
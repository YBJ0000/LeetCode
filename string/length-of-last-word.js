/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let p = s.length - 1
    while (p >= 0 && s[p] === " ") {
        p--
    }

    let length = 0
    while (p >= 0 && s[p] !== " ") {
        p--
        length++
    }
    
    return length
};
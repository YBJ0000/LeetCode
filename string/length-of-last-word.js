/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    /*
    Set `count` to store the words count of the last word
    Iterate through the string reversely:
        - If the current char is not space, count plus 1
        - If the current char is space and the count is not 0, return count
    - At the end, return count. (Otherwise, test cases that don't have space will fail)
    */

    let count = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            count++
        } else if (count !== 0 && s[i] === " ") {
            return count
        }
    }

    return count
};
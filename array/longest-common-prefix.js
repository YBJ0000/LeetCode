/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    /*
    Init prefix as empty string
    Edge case: empty array
    Step 1: find the minimum string length in the array
    Edge case: one of the strings is empty
    Step 2: compare chars column by column
        - If any mismatch, return the prefix found so far
        - If all strings match at this position, append the charactre
    Return the final common prefix
    */

    let prefix = ""

    if (strs.length === 0) return ""

    let minLen = Infinity
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLen) {
            minLen = strs[i].length
        }
    }

    if (minLen === 0) return ""

    for (let i = 0; i < minLen; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return prefix
            } else if (j === strs.length - 1) {
                prefix = prefix + strs[0][i]
            }
        }
    }

    return prefix
};
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ""

    if (strs.length === 0) {
        return prefix
    }

    let minLen = Infinity
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLen) {
            minLen = strs[i].length
        }
    }

    for (let i = 0; i < minLen; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return prefix
            } else if (j === strs.length - 1) {
                prefix = prefix + strs[0][i]
            }
        }
    }
};
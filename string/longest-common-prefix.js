/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ""

    if (strs === null) {
        return prefix
    }

    // find the shortest word and its char count
    let min_char_count = Infinity
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < min_char_count) {
            min_char_count = strs[i].length
        }
    }

    for (let i = 0; i < min_char_count; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j+1][i]) {
                return prefix
            }
        }
        prefix = prefix + strs[0][i]
    }
};
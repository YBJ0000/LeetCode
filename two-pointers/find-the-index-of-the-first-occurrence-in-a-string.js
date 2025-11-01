/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true

        for (let j = needle.length - 1; j >= 0; j--) {
            if (haystack[i + j] !== needle[j]) {
                match = false
                break
            }
        }

        if (match) {
            return i
        }
    }

    return -1
};
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = needle.length - 1; i < haystack.length; i++) {
        if (needle[needle.length-1] === haystack[i]) {
            if (needle[needle.length-2] === haystack[i-1]) {
                if (needle[needle.length-3] === haystack[i-2]) {
                    return i - needle.length + 1
                }
            }
        } else {
            return -1
        }
    }
};
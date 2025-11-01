/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    for (let i = needle.length - 1; i < haystack.length; i++) {
        for (let j = 1; j <= needle.length; j++) {
            if (needle[needle.length-j] === haystack[i-j+1]) {  // find the pattern
                return i - needle.length + 1
            }
        }
    }

    return -1



    // About Syntax:
    // str[str.length - 1] ✅
    // str[-1] ❌

    // for (let i = needle.length - 1; i < haystack.length; i++) {
    //     if (needle[needle.length-1] === haystack[i]) {
    //         if (needle[needle.length-2] === haystack[i-1]) {
    //             if (needle[needle.length-3] === haystack[i-2]) {
    //                 return i - needle.length + 1
    //             }
    //         }
    //     } else {
    //         return -1
    //     }
    // }
};
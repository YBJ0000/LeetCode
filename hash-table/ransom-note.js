/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let p1 = 0, p2 = 0

    while (p1 < ransomNote.length && p2 < magazine.length) {
        if (ransomNote[p1] === magazine[p2]) {
            p1++
            p2++
        } else {
            p2++
        }
    }

    if (p1 === ransomNote.length) {
        return true
    } else {
        return false
    }

    
};
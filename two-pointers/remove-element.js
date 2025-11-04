/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    /*
    Use two pointers:
        - `read`: scans through the array
        - `write`: points to the next position to place a non-`val` element
    If `nums[read]` is not equal to `val`, write it to `nums[write]` and move `write` forward
    Otherwise, skip it
    Return the `write` as the count of valid elements
    */

    let write = 0
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== val) {
            nums[write] = nums[read]
            write++
        }
    }

    return write









    // let p1 = 0, p2 = 0

    // while (p1 < nums.length && p2 < nums.length) {
    //     if (nums[p2] === val) {
    //         p2++
    //     } else {
    //         if (p1 !== p2) {
    //             nums[p1] = nums[p2]
    //             p1++
    //             p2++
    //         } else {
    //             p1++
    //             p2++
    //         }
    //     }
    // }

    // return p1
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    /*
    Create a temporary array `temp`.
    Iterate through `nums`, if the current value of `nums` not in `temp`, push it into `temp`.
    Then, copy all elements in `temp` back into `nums`.
    In the end, return the length of `temp`.
    */

    let temp = []

    for (let num of nums) {
        if (!temp.includes(num)) {
            temp.push(num)
        }
    }

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i]
    }

    return temp.length
};
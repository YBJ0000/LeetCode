/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    let p1 = 0, p2 = nums.length - 1

    while (p1 < nums.length -1) {
        if (nums[p1] + nums[p2] === target) {
            result = [p1, p2]
            return result
        } else if (p2 - p1 === 1) {
            p1++
            p2 = nums.length - 1
        } else if (p1 < p2) {
            p2--
        }
    }

};
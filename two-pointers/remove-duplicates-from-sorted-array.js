/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = []

    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i]) == 0) {
            temp.push(nums[i])
        }
    }

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i]
    }

    return temp.length
};
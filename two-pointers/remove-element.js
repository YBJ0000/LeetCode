/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let temp = [];
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            continue;
        } else {
            k++;
            temp.push(nums[i])
        }
    }

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i]
    }
    
    return k
};
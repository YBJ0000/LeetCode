/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dict = {}

    // count the number of each element
    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1
        } else {
            dict[nums[i]]++
        }
    }

    // compare which one appears the most often
    let majority_time = 0
    let majority_element = null

    for (let [key, value] of Object.entries(dict)) {
        if (value > majority_time) {
            majority_time = value
            majority_element = key
        }
    }

    return Number(majority_element)
    
};
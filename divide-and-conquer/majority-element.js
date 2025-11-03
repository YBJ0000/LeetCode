/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    /*
    Create a dictionary
    Iterate through the array, store all elements and their counts into the dictionary
    Create a two variables `maxCount` and `maxKey` to store the maximum count so far and the so far majority element
    Iterate through the dictionary, if the count of the current element is higher than the `maxCount`, update the `maxCount` and `maxKey`
    Return the `maxKey` (transfer it into Number)
    */

    let count = {}

    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1
        } else {
            count[nums[i]]++
        }
    }

    let maxCount = -Infinity
    let maxKey = null

    for (let key in count) {
        if (count[key] > maxCount) {
            maxCount = count[key]
            maxKey = key
        }
    }

    return Number(maxKey)
};
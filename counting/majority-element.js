/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}

    for (let num of nums) {
        if (!count[num]) {
            count[num] = 1
        } else {
            count[num]++
        }
    }

    let maxValue = -Infinity
    let maxKey = null

    for (let key in count) {
        if (count[key] > maxValue) {
            maxValue = count[key]
            maxKey = key
        }
    }

    return Number(maxKey)
};
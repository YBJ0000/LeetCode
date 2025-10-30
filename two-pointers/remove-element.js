/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    /*
    Create a temporary array `temp`.
    Iterate through nums, if the current element is not equal to `val`, push it to `temp`.
    In the end, copy all the elements from `temp` back into nums1, and return the length of `temp`.
    Time complexity: O(n)
    */
    let temp = []

    for (let num of nums) {
        if (num !== val) {
            temp.push(num)
        }
    }

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i]
    }

    return temp.length
};
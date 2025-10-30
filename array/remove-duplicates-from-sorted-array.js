/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    /*
    Since the array is sorted, duplicate elements will always be next to each other.

    Use two pointers:
    `i` scans through the array,
    `k` tracks the position of the next unique element

    If the current number is different from the previous one,
    assign it to the position where `k` is, and then move `k` forward
    In the end, the first `k` elements in `nums` are all unique, so return `k`
    */


    if (nums.length === 0) {
        return 0
    }

    let k = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[k] = nums[i]
            k++
        }
    }

    return k




    /*
    Create a temporary array `temp`.
    Iterate through `nums`, if the current value of `nums` not in `temp`, push it into `temp`.
    Then, copy all elements in `temp` back into `nums`.
    In the end, return the length of `temp`.

    Note: the `includes` method will iterate through the array once.
    Time complexity: O(n)
    */

    // let temp = []

    // for (let num of nums) {
    //     if (!temp.includes(num)) {
    //         temp.push(num)
    //     }
    // }

    // for (let i = 0; i < temp.length; i++) {
    //     nums[i] = temp[i]
    // }

    // return temp.length
};
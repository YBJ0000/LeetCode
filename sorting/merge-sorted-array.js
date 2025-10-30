/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

/*
Use two pointers i and j to iterate through nums1 and nums2.
At each step, compare elements from both arrays and push the smaller (or equal) one into a temporary array temp.
After one array is fully traversed, append the remaining elements from the other array into temp.
Finally, copy all merged elements from temp back into nums1.
 */

    let temp = []
    let i = 0, j = 0

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            temp.push(nums1[i])
            i++
        } else {
            temp.push(nums2[j])
            j++
        }
    }

    while (j < n) {
        temp.push(nums2[j])
        j++
    }

    while (i < m) {
        temp.push(nums1[i])
        i++
    }

    for (let i = 0; i < temp.length; i++) {
        nums1[i] = temp[i]
    }
    
};
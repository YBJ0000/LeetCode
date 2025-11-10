/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    /*
    Create a Map `seen` to store elements has be seen
    Scan through `nums`:
        - We need another value `need` which satisfies `need = target - nums[i]`
        - If the `need` is in `seen`, return its and current indices
        - Otherwise, put the current value and index into `seen`
    */

    const seen = new Map()

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]

        if (seen.has(need)) {
            return [seen.get(need), i]
        }

        seen.set(nums[i], i)
    }

    return []






    // // // use two pointers
    // let result = []
    // let p1 = 0, p2 = nums.length - 1

    // while (p1 < nums.length -1) {
    //     if (nums[p1] + nums[p2] === target) {
    //         result = [p1, p2]
    //         return result
    //     } else if (p2 - p1 === 1) {
    //         p1++
    //         p2 = nums.length - 1
    //     } else if (p1 < p2) {
    //         p2--
    //     }
    // }

};
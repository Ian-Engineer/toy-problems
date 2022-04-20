/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // define a new variable
    let outputArray = [];
    // for loop starting at length - k
    let i = nums.length - k
    do {
        outputArray.push(nums[i])
        if ( i === nums.length - 1) {
            i = 0
        } else {
            i++
        }
    } while (i !== nums.length - k);
    return outputArray
    // return array
};
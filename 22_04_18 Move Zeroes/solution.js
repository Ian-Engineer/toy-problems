/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // define i as 0
    let i = 0;
    // define tracker of zeroes moved
    let tracker = 0;
    // do loop
    do {
        if (nums[i] === 0) {
            nums.splice(i,1);
            nums.push(0);
            tracker ++
        } else {
            i ++
        }
        // if nums[i] === 0
            // delete current element and push 0 to back
        // else i ++
    // while i < length of nums
    } while (i < nums.length - tracker)
        return nums
};
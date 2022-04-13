var search = function(nums, target) {
    debugger;
    // check if number exists within the range
    if (target < nums[0] || target > nums[nums.length -1]) {
        return -1;
    }
    // check if it is first index
    if (target === nums[0]) return 0;
    // check if it is the last index
    if (target === nums[nums.length -1]) return nums.length - 1;

    //define left and right variables
    let left = 0;
    let right = nums.length - 1;
    let mid;
    // do loop
    do {
        //define mid point between left and right
        mid = left + Math.ceil((right - left)/2)
        // compare nums[mid] to target - return mid if equal
        if (nums[mid] === target) return mid;
        // compare nums[mid] to target - alter right if less than
        if (nums[mid] < target) left = mid;
        // compare nums[mid] to target - alter left is greater than
        if (nums[mid] > target) right = mid;
    } while (right - left > 1)
    // while nums.length > 0
    return -1
}
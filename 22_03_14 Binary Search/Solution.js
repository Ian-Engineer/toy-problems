var search = function(nums, target) {
    debugger;
    // check if number exists within the range
    if (target < nums[0] || target > nums[nums.length -1]) {
        return null;
    }

    //define left and right variables
    let left = 0;
    let right = nums.length - 1;
    let mid;
    // do loop
    do {
        //define mid point of temp array
        mid = right - Math.floor((right - left)/2)
        if (nums[mid] === target) return mid;
        if (target < nums[mid]) right = mid;
        if (target > nums[mid]) left = mid;
        // check if target is equal to mid
    } while (right - left > 1)
    // while nums.length > 0
    return - 1
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    // map through the array
    let numsSquared = nums.map((number) => {
        return number * number;
    })
    // begin bubble sort
    // while loop until i equals length of nums
    let i = 0;
    while (i < nums.length) {
        // compare current element and next
        let prevEl = numsSquared[i - 1];
        let currentEl = numsSquared[i];
        let nextEl = numsSquared[i + 1];
        if (prevEl !== undefined && prevEl > currentEl) {
            numsSquared[i - 1] = currentEl;
            numsSquared[i] = prevEl
            i--
        } else if (currentEl > nextEl) {
            // swap elements
            numsSquared[i] = nextEl;
            numsSquared[i + 1] = currentEl;
        } else {
            i++
        }
    }
    // return output
    return numsSquared
};


const testArray = [-6, -5, -3, -2, -1]
console.log(sortedSquares(testArray))
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // define left and right
        let left  = 1;
        let right = n;
        // begin binary search with while
        while (left < right) {
            // define the middle between right and left
            var middle = left + (right - left)/2;
            // execute isBadVersion on the middle
            if (isBadVersion(middle)) {
                right = middle;
            } else {
                left  = middle  + 1;
            }
        }
        return left;
    };
};
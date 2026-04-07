class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let s = new Set(nums);
        let arr = [...s].sort((a, b) => a - b);

        if (arr.length == 0) {
            return 0;
        }

        let count = 1;
        let max = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] === 1) {
                count++;
                max = Math.max(max,count);
            } else {
                count = 1;
            }
        }

        return max;

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //my solution
        // let s = new Set(nums);
        // let arr = [...s].sort((a, b) => a - b);

        // if (arr.length == 0) {
        //     return 0;
        // }

        // let count = 1;
        // let max = 1;
        // for (let i = 1; i < arr.length; i++) {
        //     if (arr[i] - arr[i - 1] === 1) {
        //         count++;
        //         max = Math.max(max,count);
        //     } else {
        //         count = 1;
        //     }
        // }

        // return max;

        //optimal solution O(n)
        let s = new Set(nums);
        let max = 1;

        if (s.size == 0) {
            return 0;
        }

        for(let num of nums){
            if(!s.has(num-1)){
                let curr = num;
                let c = 1;

                while(s.has(curr+1)){
                    curr++;
                    c++;
                }

                max=Math.max(max,c);
            }
        }

        return max;
    }
}

class Solution {
    /**
         * @param {number[]} nums
              * @param {number} k
                   * @return {number[]}
                        */
    topKFrequent(nums, k) {
        //first solution
        let m = new Map();
        for (let n of nums) {
            if (m.has(n)) {
                m.set(n, m.get(n) + 1);
            } else {
                m.set(n, 1);
            }
        }

        let arr = [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, k);
        let res = arr.map(([key]) => key);



        return res;
    }
}
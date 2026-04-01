class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //brute force one
        // for(let i = 0; i < nums.length; i ++){
        //     for(let j = i+1; j < nums.length;j++){
        //         if(target - nums[i] == nums[j]){
        //             return [i,j];
        //         }
        //     }
        // }

        let m = new Map();

        for(let i = 0; i < nums.length;i++){
            let dif = target - nums[i];
            if(m.has(dif)){
                return [i,m.get(dif)]
            }else{
                m.set(nums[i],i)
            }
        }
    }
}



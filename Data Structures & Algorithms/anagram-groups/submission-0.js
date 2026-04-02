class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //O(m*nlogn) solution
        let m = new Map();
        for (let str of strs) {
            let s = [...str].sort().join('');
            if (m.get(s)) {
                m.get(s).push(str);
            } else {
                m.set(s, [str]);
            }
        }

        return Array.from(m.values());;
    }
}

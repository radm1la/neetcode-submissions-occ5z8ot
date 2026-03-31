class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let c1 = {};
        let c2 = {};

        for (let c of s) {
            c1[c] = (c1[c] || 0) + 1;
        }

        for (let c of t) {
            c2[c] = (c2[c] || 0) + 1;
        }

        for(let k in c1){
            if(c1[k] !== c2[k]){
                return false;
            }
        }

        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1 = [...s].sort().join("");
        let s2 = [...t].sort().join("");

        return s1 === s2 && s1.length === s2.length;
    }
}

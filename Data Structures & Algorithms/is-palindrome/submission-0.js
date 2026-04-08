class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let rev = str.split("").reverse().join("");
        return str === rev;
    }
}

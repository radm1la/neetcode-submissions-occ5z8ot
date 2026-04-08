class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //O(n) & O(n)
        // let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        // let rev = str.split("").reverse().join("");
        // return str === rev;

        //two pointers
        let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let l = 0;
        let r = str.length - 1;

        while (l < r){
            if(str[l] !== str[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}

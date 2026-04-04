class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let str of strs) {
            res += str.length + "_" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        for (let i = 0; i < str.length;) {
            let num = "";
            while (str[i] !== "_") {
                num += str[i];
                i++;
            }
            let l = Number(num);
            i++;
            res.push(str.slice(i, i + l))
            i += l;
        }

        return res;
    }
}

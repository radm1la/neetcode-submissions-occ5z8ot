class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //O(m*nlogn) solution
        // let m = new Map();
        // for (let str of strs) {
        //     let s = [...str].sort().join('');
        //     if (m.get(s)) {
        //         m.get(s).push(str);
        //     } else {
        //         m.set(s, [str]);
        //     }
        // }

        // return Array.from(m.values());;

        let m = new Map();

        for (let str of strs) {
            const chs = new Array(26).fill(0);

            for (let ch of str) {
                const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                chs[index] += 1;
            }
            let key = chs.join('-');
            if (m.has(key)) {
                m.get(key).push(str);
            } else {
                m.set(key, [str]);
            }
        }

        return Array.from(m.values());
    }
}

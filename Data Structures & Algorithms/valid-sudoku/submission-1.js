class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row of board) {
            const freq = new Map();

            for (let num of row) {
                if (num === ".") continue;

                if (freq.has(num)) {
                    return false;
                } else {
                    freq.set(num, freq.get(num)  + 1);
                }
            }
        }

        const cols = board[0].length;

        for (let c = 0; c < cols; c++) {
            const freq = new Map();

            for (let r = 0; r < board.length; r++) {
                const num = board[r][c];
                if (num === ".") continue;
                if (freq.has(num)) {
                    return false;
                } else {
                    freq.set(num, freq.get(num) + 1);
                }
            }
        }

        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {

                const freq = new Map();

                for (let r = boxRow; r < boxRow + 3; r++) {
                    for (let c = boxCol; c < boxCol + 3; c++) {
                        const val = board[r][c];

                        if (val === ".") continue;
                        if (freq.has(val)) {
                            return false;
                        } else {
                            freq.set(val, freq.get(val) + 1);

                        }
                    }
                }

            }
        }

    return true;

    }
}

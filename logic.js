// Check if sudoku board is valid
function isValidSudoku(board) {
    // Check for valid rows
    function isValidRow(row) {
        // use a Set to keep track of what has been seen
        const seen = new Set();

        for (let num of row) {
            if (num !== 0 ) {
                // loop through the row to find repition
                if (seen.has(num)) {
                    return false;
                }
                seen.add(num);
            }
        }
        return true;
    }
    
    // Check for valid columns
    function isValidColumn(col) {
        // use a Set to keep track of what has been seen
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            const num = board[row][col];
            if (num !== 0) {
                // loop through the column to find repition
                if (seen.has(num)) {
                    return false;
                }
                seen.add(num);
            }
        }
        return true;
    }
    
    // Check valid boxes
    function isValidBox(startRow, startCol) {
        const seen = new Set();
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const num = board[row][col];
                if (num !== 0) {
                    if (seen.has(num)) {
                        return false;
                    }
                    seen.add(num);
                }
            }
        }
        return true;
    }

    for (let i = 0; i < 9; i++) {
        if (!isValidRow(board[i]) || !isValidColumn(i)) {
            return false;
        }
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isValidBox(i, j)) {
                return false;
            }
        }
    }

    return true;
}


const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
console.table(sudokuBoard)
console.log(isValidSudoku(sudokuBoard));  // Output: true


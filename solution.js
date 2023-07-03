/**
 * @param {number} numRows
  * @return {number[][]}
   */
var generate = function (numRows) {
        if (numRows <= 0) {
                return [];
        }

        const triangle = [[1]];

        for (let i = 1; i < numRows; i++) {
                const row = [1];
                const prevRow = triangle[i - 1];

                for (let j = 1; j < i; j++) {
                        row.push(prevRow[j - 1] + prevRow[j]);
                }

                row.push(1);
                triangle.push(row);
        }

        return triangle;
};

// Example usage:
const numRows = 5;
const result = generate(numRows);
console.log(result);

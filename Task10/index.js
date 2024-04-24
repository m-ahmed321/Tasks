const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagnalDifference(matrix) {
  const n = matrix.length;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    leftDiagonalSum += matrix[i][i];
    rightDiagonalSum += matrix[i][n - i - 1];
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
  }
}
const difference = diagnalDifference(matrix);
console.log(difference);

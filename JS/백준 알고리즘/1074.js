[testCase, col, row] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = 0;
const z = (n, r, c) => {
  console.log(n, r, c);
  if (row === r && col === c) {
    console.log(answer);
  } else if (row >= r && row < r + n && col >= c && col < c + n) {
    n /= 2;
    z(n, r, c);
    z(n, r + n, c);
    z(n, r, c + n);
    z(n, r + n, c + n);
  } else {
    answer += n * n;
  }
};

const size = 1 << testCase;
z(size, 0, 0);

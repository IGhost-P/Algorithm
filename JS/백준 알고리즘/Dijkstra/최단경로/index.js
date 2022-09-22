[testCase, start, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr.map((el) => el.split(" ").map(Number));

console.log(testCase, start, arr);

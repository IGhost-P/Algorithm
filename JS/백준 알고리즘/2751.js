// 수 정렬하기 2
const [n, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

console.log(arr.sort((a, b) => a - b).join("\n"));

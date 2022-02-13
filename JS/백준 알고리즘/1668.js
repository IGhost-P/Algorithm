// 트로피 진열
[testCase, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let left = 1;
let right = 1;
let left_max = 1;
let right_max = 1;

arr.reduce((prv, cur) => {
  if (cur < left_max) {
    left += 1;
  } else {
    left_max = cur;
  }
  return (prv = cur);
});
arr.reverse().reduce((prv, cur) => {
  console.log(prv, right_max);
  if (cur < right_max) {
  } else {
    right_max = cur;
    right += 1;
  }
  return (prv = cur);
});
console.log(left, right);

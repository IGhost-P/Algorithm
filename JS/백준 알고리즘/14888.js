// 14888

/* 
첫째줄 testCase Number
둘째줄 연살할 수
셋째줄 연산자개수

DFS로 조합을 돌리면 될듯?

*/

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

num = testCase.shift();
arr = testCase.shift().split(" ").map(Number);
[add, mius, multy, divi] = testCase[0].split(" ").map(Number);
answer = [];

let maximum = -1e9;
let minimum = 1e9;
const make = (depth, total, add, mius, multy, divi) => {
  if (num == depth) {
    maximum = Math.max(total, maximum);
    minimum = Math.min(total, minimum);
    return;
  }
  if (add) make(depth + 1, total + arr[depth], add - 1, mius, multy, divi);
  if (mius) make(depth + 1, total - arr[depth], add, mius - 1, multy, divi);
  if (multy) make(depth + 1, total * arr[depth], add, mius, multy - 1, divi);
  if (divi)
    make(depth + 1, parseInt(total / arr[depth]), add, mius, multy, divi - 1);
};

make(1, arr[0], add, mius, multy, divi);
console.log(maximum + "\n" + minimum);

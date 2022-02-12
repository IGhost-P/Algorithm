[testCase, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
newArr = Array.from({ length: 10_000 }, (v) => 0);
arr.map((el) => {
  newArr[el] += 1;
});
answer = [];
newArr.map((el, idx) => {
  if (el != 0) {
    for (let i = 0; i < el; i++) {
      answer.push(idx);
    }
  }
});
console.log(answer.join("\n"));

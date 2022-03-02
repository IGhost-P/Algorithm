// 행복
/* 

그냥 차이?
=> 근데 이거 readline으로 받아야함

*/

// testCase = require("fs")
//   .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
//   .toString()
//   .trim()
//   .split("\n");

// num = testCase.shift();
// arr = testCase[0].split(" ").map(Number);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(line);
  //rl.close()가 없어서 계속 입력
  //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function () {
  let num = parseInt(input[0]);
  let arr = input[1].split(" ").map(Number);
  solution(num, arr);
  process.exit();
});

const solution = (num, arr) => {
  maxNum = Math.max(...arr);
  minNum = Math.min(...arr);

  console.log(maxNum - minNum);
};

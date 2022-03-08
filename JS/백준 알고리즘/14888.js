// 14888

/* 
첫째줄 testCase Number
둘째줄 연살할 수
셋째줄 연산자개수

첫번째 수 + 연산자 = 결과 다시 또 보내고 , 두번째 반복...
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

const makeAns = (no, arr, i) => {};

// 거스름돈
/*
돈 정렬
잔돈 구기
*/

testCase = require("fs").readFileSync("예제.txt").toString().trim();
testCase = Number(testCase);
let answer, i;
const greedy = (money) => {
  returnMoney = 1000 - money;
  unit = [500, 100, 50, 10, 5, 1];
  i = 0;
  answer = 0;

  while (returnMoney >= 1) {
    if (returnMoney >= unit[i]) {
      returnMoney -= unit[i];
      answer++;
    } else {
      if (i == 5) {
        i = 5;
      } else {
        i++;
      }
    }
  }

  return answer;
};

console.log(greedy(testCase));

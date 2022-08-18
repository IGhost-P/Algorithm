// 11501 : 주식
/**
 *
 * 명제 : 가장 값이큰 주식 - 현재 값 을 진행하다가, 가장 큰 값이 나오면, 이후 남아 있는 주식중 가장 큰값으로 변경해주고 다시 반복한다
 */

[T, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

T = parseInt(T);
let number = 0;
let answerList = [];
while (T * 2 > number) {
  N = Number(testCase[number]);
  arr = testCase[number + 1].split(" ").map(Number);
  max = arr[arr.length - 1];
  answer = 0;
  for (let i = N - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
    }
    max - arr[i] > 0 ? (answer += max - arr[i]) : (answer += 0);
  }
  answerList.push(answer);
  number += 2;
}

console.log(answerList.join("\n"));

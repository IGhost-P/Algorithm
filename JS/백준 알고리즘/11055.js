// 11055 : 가장 큰 증가 부분 수열
/**
 * 매번 돌면서, 자기 직전 값까지 자기 보다 작은 경우만 더함
 */

[N, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
arr = arr.split(" ").map((el) => Number(el));
answerList = [];
dp = [arr[0]];
for (let i = 1; i < N; i++) {
  let answer = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      answer = Math.max(answer, dp[j]);
    }
  }
  dp.push(arr[i] + answer);
}

console.log(Math.max(...dp));

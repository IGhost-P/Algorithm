// 11659 : 구간합 구하기
/**
 * 구간 처음부터 i 번째까지 구하는것을 dp[i]라고 하면
 * dp[i] = arr[1] + arr[2] .... arr[i] 이다
 * 이것을 정리하면
 * dp[i] = dp[i-1] + arr[i] 이면서
 * dp[j] = dp[j-1] + arr[j] 이면서
 * 그렇담 i~ j 까지의 합은 dp[j]-dp[i-1] 이다
 */

testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = testCase.shift().split(" ").map(Number);
const arr = testCase.shift().split(" ").map(Number);
const dp = Array(N + 1).fill(0);
const answer = [];

for (let i = 1; i <= N; i++) {
  dp[i] = dp[i - 1] + arr[i - 1];
}

for (let i = 0; i < M; i++) {
  let [b, f] = testCase[i].split(" ").map(Number);

  answer.push(dp[f] - dp[b - 1]);
}

console.log(answer.join("\n"));

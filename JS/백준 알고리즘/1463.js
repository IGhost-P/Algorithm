// 1463 : 1로 만들기
/**
 * dp[K]에서 할수 있는것은
 * 1. 3으로 나누기 = dp[k/3] + 3
 * 2. 2로 나누기 = dp[k/2] + 2
 * 3. 1을 빼기 = dp[k-1] + 1
 *
 * 이로 점화식을 구해보자
 */

const testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim();

const dp = [0, 0];

for (let i = 2; i <= testCase; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
}

console.log(dp[testCase]);

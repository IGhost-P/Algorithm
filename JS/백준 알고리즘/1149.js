// 1149 : RGB 거리
/**
 * i 집을 칠할때, 직전 집 중에 자신과 다른 색상의 집중 가장 작은 값을 선택하면 된다
 *
 * 즉
 * dp[i][0] = i번째 집을 R로 칠한다는 뜻이면 = dp[i][0] = Math.min( dp[i-1][1], dp[i-1][2]) + rgb[i][0] 이여야한다
 *
 * 첫집의 dp[0][0], dp[0][1], dp[0][2] 을 각 rgb값으로 설정해주고 문제를 풀면된다.
 */

[n, ...rgb] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
rgb = rgb.map((v) => v.split(" ").map((el) => Number(el)));

const solution = (n, rgb) => {
  const dp = Array(n)
    .fill(0)
    .map(() => Array(3).fill(Infinity));
  dp[0] = rgb[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i][2];
  }
  return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
};

console.log(solution(n, rgb));

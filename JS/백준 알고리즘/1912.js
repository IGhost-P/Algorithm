// 1912 : 연속합
/**
 * prefixsum 을 이용해보는게 좋을것 같은데, 현재 값을 d[i] 라 할때 이전값 까지의 합  + 현재값 vs 이전값 + 현재값 을 비교해가면서 수를 키우면 될것 같은데..? 그러면서 max는 계속해서 없데이트
 */

[n, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .split("\n");
n = Number(n);
arr = arr.split(" ").map(Number);

dp = Array.from({ length: n }, () => 0);
dp[0] = arr[0];
dp[1] = dp[0] + arr[1];
max = -Infinity;

if (dp[1] > max) max = dp[1];

for (let i = 2; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i - 1] + arr[i]);

  if (max < dp[i]) {
    max = dp[i];
  }
}

// 아무것도 합하지 않을때가 오히려 더 큰경우를 생각해야함
arr.map((el) => {
  if (max < el) {
    max = el;
  }
});

console.log(max);

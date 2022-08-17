[NK, ...worth] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[N, K] = NK.split(" ").map((el) => parseInt(el));
worth = worth.map((el) => el.split(" ").map((el) => parseInt(el)));

const dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [weight, value] = worth[i - 1];
  for (let w = 1; w <= K; w++) {
    if (weight <= w) {
      dp[i][w] = Math.max(dp[i - 1][w - weight] + value, dp[i - 1][w]);
    } else {
      dp[i][w] = dp[i - 1][w];
    }
  }
}

console.log(dp[N][K]);

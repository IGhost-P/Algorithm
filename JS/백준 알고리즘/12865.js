// // 평범한 배낭
// /*
//  나누지 못한다
//  코스트가 가장 큰것부터 시작하돼, 무게가 많이 나가면 다음걸로
//  즉
//  dp[1] + dp[2] = wegiht => 가 크면
//  dp[2] + dp[3] = weight 이런식으로 wegith에 랑 같아져야함
//  */
// [testCase, ...luggage] = require("fs")
//   .readFileSync("예제.txt")
//   .toString()
//   .trim()
//   .split("\n");
// let [num, max] = testCase.split(" ").map(Number);

// let dp = new Array(num + 1).fill().map(() => Array(max + 1).fill(0));

// for (let i = 1; i <= num; i++) {
//   [weight, cost] = luggage[i - 1].split(" ").map(Number);

//   for (let j = 1; j <= max; j++) {
//     if (j < weight) {
//       dp[i][j] = dp[i - 1][j];
//     } else {
//       dp[i][j] =
//         dp[i - 1][j] > dp[i - 1][j - weight] + cost
//           ? dp[i - 1][j]
//           : dp[i - 1][j - weight] + cost;
//     }
//   }
// }

// console.log(dp[num][max]);

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

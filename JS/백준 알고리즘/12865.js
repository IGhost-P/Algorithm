// 평범한 배낭
/*
 나누지 못한다
 코스트가 가장 큰것부터 시작하돼, 무게가 많이 나가면 다음걸로
 즉 
 dp[1] + dp[2] = wegiht => 가 크면
 dp[2] + dp[3] = weight 이런식으로 wegith에 랑 같아져야함
 */
[testCase, ...luggage] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
let [num, max] = testCase.split(" ").map(Number);

let dp = new Array(num + 1).fill().map(() => Array(max + 1).fill(0));

for (let i = 1; i <= num; i++) {
  [weight, cost] = luggage[i - 1].split(" ").map(Number);

  for (let j = 1; j <= max; j++) {
    if (j < weight) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] =
        dp[i - 1][j] > dp[i - 1][j - weight] + cost
          ? dp[i - 1][j]
          : dp[i - 1][j - weight] + cost;
    }
  }
}

console.log(dp[num][max]);

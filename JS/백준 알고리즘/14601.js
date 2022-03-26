// 14501 : 퇴사
/**
 *
 * 7이 limit라 생각하고
 * 7일에 1,2,3,4,5,6,7일 중 7일이 있는 경우, 없는경우.. .이렇게 쭉 줄여나가서 동적계획법으로 풀어보자
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
arr = [[0, 0], ...arr.map((el) => el.split(" ").map(Number))];

dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
// dp = new Array(N).fill(0)
// console.log(arr);

// arr[n][0] = T => Limit
// arr[n][1] = P => vlaue

for (let i = 1; i <= N; i++) {
  if (arr[i][0] + i > N + 1) break;
  for (let j = 1; j <= N; j++) {
    if (arr[j][0] + j > N + 1) continue;
    if (arr[i][0] > j) {
      dp[i][j] = dp[i - 1][j];
    } else {
      //   if (i + j > N + 1) continue;
      //   console.lpg("궁금해서", arr[i][0], arr[i - arr[i][0]][0]);
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - arr[i][0]] + arr[i][1]);
    }
  }
}

console.log(dp);
console.log(Math.max(...dp.flat()));

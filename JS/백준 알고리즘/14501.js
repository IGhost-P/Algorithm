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
arr = [...arr.map((el) => el.split(" ").map(Number))];

dp = new Array(N + 1).fill(0);

for (let i = N - 1; i > -1; i--) {
  if (i + arr[i][0] > N) {
    dp[i] = dp[i + 1];
  } else {
    dp[i] = Math.max(arr[i][1] + dp[i + arr[i][0]], dp[i + 1]);
  }
}

console.log(dp[0]);

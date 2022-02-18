// // dp
// /*
// 최장 공통 부분 수열 문제이다
// ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.

// 기존에 풀었던 가장 긴 부분 수열 문제에서 서로 공통인 부분을 찾아 풀면 될것 같다
// */
let fs = require("fs");
let string = fs.readFileSync("dev/stdin").toString().split("\n");
let test1 = string[0];
let test2 = string[1];
const len = test1.length;
const len2 = test2.length;

let dp = Array.from(Array(len + 1), () => new Array(len2 + 1).fill(0));

for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len2; j++) {
    if (test1.charAt(i - 1) == test2.charAt(j - 1)) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

console.log(dp[len][len2]);

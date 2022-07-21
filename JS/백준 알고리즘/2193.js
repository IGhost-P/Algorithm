// // 2193 : 이친수
// /**
//  * 1, 10, 100, 101, 1000
//  */

// N = require("fs")
//   .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
//   .toString()
//   .trim();

const fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString();
inputs = Number(inputs);

const dp = [0, 1, 1];

for (let i = 3; i <= inputs; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(BigInt(dp[inputs]).toString());

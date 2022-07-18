// 2579 : 계단 오르기
/**
 * 2차원 배열을 통해서 1계단을 연속해서 걸었냐, 2계단을 넘었냐를 판단
 * 즉
 * dp[i][1] = dp[i-2][1] 과 dp[i-2][2] 중 최대값을 판단하고 마지막 계단을 밟는다
 * dp[i][2] = dp[i-2][1] 에서 마지막 계단을 밟는다 (마지막 계단은 무조건 밟아야 하니깐 직전값이 1이거나 2이면 안된다)
 */

let [testCase, ...stairs] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

testCase = parseInt(testCase);
stairs = stairs.map((v) => parseInt(v));

// console.log(stairs);
const solution = (stairs) => {
  if (stairs.length === 1) {
    return console.log(stairs[0]);
  }

  const dp = Array.from({ length: stairs.length }, () =>
    Array.from({ length: 2 }, () => 0)
  );

  // 연속되게 밟으면 안된다는 것을 생각해서 최기값을 정하자
  dp[0][0] = stairs[0];
  dp[0][1] = 0;
  dp[1][0] = stairs[1];
  dp[1][1] = stairs[1] + stairs[0];

  for (let i = 2; i < testCase; i++) {
    dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + stairs[i];
    dp[i][1] = dp[i - 1][0] + stairs[i];
  }

  return console.log(Math.max(dp[testCase - 1][0], dp[testCase - 1][1]));
};

testCase === 0 ? console.log(0) : solution(stairs);

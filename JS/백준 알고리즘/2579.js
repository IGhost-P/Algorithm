// 2579 : 계단 오르기
/**
 * 2차원 배열을 통해서 1계단을 연속해서 걸었냐, 2계단을 넘었냐를 판단
 * 즉
 * dp[i][1] = dp[i-2][1] 과 dp[i-2][2] 중 최대값을 판단하고 마지막 계단을 밟는다
 * dp[i][2] = dp[i-2][1] 에서 마지막 계단을 밟는다 (마지막 계단은 무조건 밟아야 하니깐 직전값이 1이거나 2이면 안된다)
 */

// let [testCase, ...stairs] = require("fs")
//   .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
//   .toString()
//   .trim()
//   .split("\n");

// testCase = parseInt(testCase);
// stairs = stairs.map((v) => parseInt(v));

// // console.log(stairs);
// const solution = (stairs) => {
//   if (stairs.length === 1) {
//     return console.log(stairs[0]);
//   }

//   const dp = Array.from({ length: stairs.length }, () =>
//     Array.from({ length: 2 }, () => 0)
//   );

//   // 연속되게 밟으면 안된다는 것을 생각해서 최기값을 정하자
//   dp[0][0] = stairs[0];
//   dp[0][1] = 0;
//   dp[1][0] = stairs[1];
//   dp[1][1] = stairs[1] + stairs[0];

//   for (let i = 2; i < testCase; i++) {
//     dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + stairs[i];
//     dp[i][1] = dp[i - 1][0] + stairs[i];
//   }

//   return console.log(Math.max(dp[testCase - 1][0], dp[testCase - 1][1]));
// };

// testCase === 0 ? console.log(0) : solution(stairs);

// 2579 : 계단오르기 2번쨰 풀이
/**
 * 이번에는 밟지 않은 계단의 합을 구해 모든 계단 합에서 빼보자,
 * 즉 dp[i] 는 i번째 계단까지 올라섰을때 밟지 않은 계단의 합, 대신 i 번쨰 계단은 밟지 않아야 한다
 *
 * 1번쨰 계단을 밟지 않는 다면 dp[0] = 10
 * 2번쨰 계단을 밟지 않는다면 dp[1] = 20
 * 3번째 계단을 밟지 않는다면 dp[2] = 15 // 1번째나 2번쨰 계단을 밟고 3번째 계단 차례가 되면 15이기 떄문
 *
 * // 4번째 계단만 밟지 않을려면, 1,2,3 계단을 밟아야 한다는건데 이건 말이 안된다. 무조건 1,2,3중에에서 하나를 밟아야하긴 하지만, 3번째 계단은 밟지 않은 상태로 4번째를 갈수 있으니, 1이나 2번째 계단에서 판단해야한다
 * 4번재 계단을 밟지 않는다면 dp[3] = d[0] + s[3] = 35 이거나 , dp[1] + s[3] = 45 , 최소값인 35를 선택,
 *
 * 점화식으로 구해보자면
 * dp[i] = min(dp[i-3] + s[i], dp[i-2] + s[i]) )
 * 이다.
 */

let [testCase, ...stairs] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

testCase = parseInt(testCase);
stairs = stairs.map((v) => parseInt(v));
total = stairs.reduce((acc, cur) => acc + cur, 0);

const dp = Array.from({ length: stairs.length }, () => 0);
dp[0] = stairs[0];
dp[1] = stairs[1];
dp[2] = stairs[2];

for (let i = 3; i < testCase; i++) {
  dp[i] = Math.min(dp[i - 2], dp[i - 3]) + stairs[i];
}

if (testCase <= 2) {
  console.log(total);
  process.exit(0);
}
// 마지막 계단을 무조건 밟아야하니 직전까지 안밟은 수까지만 구해서 확인하자.
console.log(total - Math.min(dp[testCase - 2], dp[testCase - 3]));

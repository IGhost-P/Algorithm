// 12852 : 1로 만들기2
/**
 * dp[K]에서 할수 있는것은
 * 1. 3으로 나누기 = dp[k/3] + 1
 * 2. 2로 나누기 = dp[k/2] + 1
 * 3. 1을 빼기 = dp[k-1] + 1
 *
 * 이로 점화식을 구해보자
 *
 * 에서 경로를 추적하기 위해서, 선택한 숫자를 저장하는 배열을 사용하자
 */

const testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim();

const dp = [0, 0];
const track = dp.concat([]);
for (let i = 2; i <= testCase; i++) {
  dp[i] = dp[i - 1] + 1;
  prev = dp[i];
  last = i - 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
    if (dp[i] !== prev) {
      prev = dp[i];
      last = i / 3;
    }
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    if (dp[i] !== prev) {
      prev = dp[i];
      last = i / 2;
    }
  }

  track.push(last);
}

num = testCase;
const answer = [num];
while (track[num] !== 0) {
  answer.push(track[num]);
  num = track[num];
}

console.log(dp[testCase]);
console.log(answer.join(" "));

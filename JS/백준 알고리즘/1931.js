// 1931 : 회의실 배정
/**
 * dp 접근법,
 * dp[i] = Math.max(dp[j] +1) 이되어야 한다.
 * 즉 dp[i]는 i번째 회의를 마지막으로 진행했을때 최대 회의의수
 *
 * dp[1] = 1
 * dp[2] = 1
 * d[3] = 1
 * dp[4] = d[1] + 1 or dp[2] + 1 = 2 (조건을 따라야한다)
 *
 * sudo code:
 * 1. 초기화
 * 2. dp 배열을 만든다.
 * 3. dp[i] 번째 배열을 만들때 조건은 , i-1번째 까지의 배열을 돌면서 자신의 시작 시간보다 작은 시간이 있는지 이다
 *  3-1. 있다면 dp[해당 index]+1
 *  3-2. 걍 1
 *
 */

// [N, ...meetingTime] = require("fs")
//   .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
//   .toString()
//   .trim()
//   .split("\n");

// meetingTime = meetingTime.map((el) => el.split(" ").map((el) => parseInt(el)));

// const solution = (N, meetingTime) => {
//   let dp = new Array(N).fill(0);
//   flag = false;
//   dp[0] = 1;
//   for (let i = 1; i < N; i++) {
//     let max = -Infinity;
//     for (let j = 0; j < i; j++) {
//       if (meetingTime[j][1] <= meetingTime[i][0]) {
//         if (max < dp[j]) {
//           max = dp[j];
//         }
//         flag = true;
//       }
//     }

//     dp[i] = max + 1;

//     if (!flag) {
//       dp[i] = 1;
//     }
//     flag = false;
//   }
//   return dp[N - 1];
// };

// console.log(solution(N, meetingTime));

/**
 * 그리디로 풀이
 *
 * 가장 먼저 끝나는 회의를 찾아 사용한다.
 */

[N, ...meetingTime] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

meetingTime = meetingTime.map((el) => el.split(" ").map((el) => parseInt(el)));

const solution = (N, meetingTime) => {
  let number = 0;
  let count = 0;
  let startTime = 0;
  meetingTime.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  while (N > number) {
    if (startTime <= meetingTime[number][0]) {
      startTime = meetingTime[number][1];
      count++;
    }
    number++;
  }

  console.log(count);
};

solution(N, meetingTime);

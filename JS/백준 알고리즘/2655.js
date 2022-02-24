// 가장 높은 탑 쌓기
/* 
제일 아래가 밑면이 높아야겠네, 그렇다고 무게가 무거우면 안됨

첫번쨰줄 = 벽돌수

두번째줄부터 = 밑의의 넓이, 높이, 무게
LIS를 이용을 한다면..

*/
testCase = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
let arr = [[0, 0, 0, 0]];

function solution(testCase) {
  // 1st line
  N = Number(testCase.shift());

  // 2nd line
  for (let i = 0; i < N; i++) {
    [area, height, weight] = testCase[i].split(" ").map(Number);

    // make refer table
    arr.push([i + 1, area, height, weight]);
  }

  // sort by weight
  arr.sort((a, b) => a[3] - b[3]);

  let dp = Array(N + 1).fill(0);
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j < i; j++) {
      // make dp by the area , dp means max height

      if (arr[i][1] > arr[j][1]) {
        // e.g) if i = 4 , dp is.. 0 => 5+2 => 7+2
        dp[i] = Math.max(dp[i], dp[j] + arr[i][2]);
      }
    }
  }

  maxValue = Math.max(...dp);
  idx = N;
  result = [];

  // BackTrace
  while (idx != 0) {
    if (maxValue == dp[idx]) {
      result.push(arr[idx][0]);
      maxValue -= arr[idx][2];
    }
    idx -= 1;
  }
  result.push(result.length);
  result = result.reverse();

  console.log(result.join("\n"));
}

solution(testCase);

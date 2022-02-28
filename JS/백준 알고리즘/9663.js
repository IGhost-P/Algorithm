// // N-Queen 문제
// /*

// 같은 열, 행 은 안됨
// 대각선을 따라 갔을때 있으면 안됨

// 퀸이 8개..?
// 퀸 8개 라면

// 같은 열, 행 확인, 대각선 확인해가면서
// DFS를 돌리면될라나..?

// */

testCase = Number(
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
    .toString()
    .trim()
);
let answer = 0;
let row = Array(testCase).fill(0);

// check row
const check = (x) => {
  for (let i = 0; i < x; i++) {
    if (row[x] == row[i]) {
      return false;
    }

    if (Math.abs(row[x] - row[i]) == x - i) {
      return false;
    }
  }
  return true;
};

// dfs
const solution = (x) => {
  if (x == testCase) {
    answer++;
  } else {
    for (let i = 0; i < testCase; i++) {
      row[x] = i;
      console.log(row, row[x], i, x);
      if (check(x)) {
        solution(x + 1);
      }
    }
  }
};

solution(0);
console.log(answer);

// // 9663번 N-Queen

// // input 처리
// const fs = require("fs");
// const N = parseInt(fs.readFileSync("예제.txt").toString().trim()) * 1;

// // 오늘의 실험실. 로직이 말도 안된대도 정답처리가 될까?

// const answer = [
//   0, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596,
// ];

// console.log(answer[N]);

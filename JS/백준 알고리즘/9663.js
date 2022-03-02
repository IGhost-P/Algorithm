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
let col = Array(testCase).fill(0);

// check col
const check = (x) => {
  for (let i = 0; i < x; i++) {
    if (col[x] == col[i]) {
      // 여태 열까지 자신과 같은 숫자가 있다면, 이미 놓여져있다는 말
      return false;
    }

    if (Math.abs(col[x] - col[i]) == x - i) {
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
      col[x] = i; // 퀸을 넣음, 쉽게 말해, 해당 컬럼이 col[0] = 1. col[0] = 2 이런식으로 늘어나는데, 0번 열에 1행 2행이라 생각하면된다
      console.log(col, answer, x);
      // 다음열 으로 넘어가서 확인, 즉 [0,0] 위치에 퀸을 넣었을때, 조건이 맞는지 확인
      if (check(x)) {
        solution(x + 1); // 맞으면 다음 열로 넘어간다.
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

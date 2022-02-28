// N-Queen 문제
/* 

같은 열, 행 은 안됨
대각선을 따라 갔을때 있으면 안됨

퀸이 8개..?
퀸 8개 라면

같은 열, 행 확인, 대각선 확인해가면서
DFS를 돌리면될라나..?

*/

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

      if (check(x)) {
        solution(x + 1);
      }
    }
  }
};

solution(0);
console.log(answer);

// // 1941 : 소문난 칠공주
// /**
//  * dfs를 돌리면서
//  *  1. 7명까지
//  *  2. 가로나 세로로만 이동
//  * promising
//  *  1. 다 뽑았을때 S > Y이여야함
//  *  2. 이미 S가 4명 이상이라면 ㄱㅊ
//  */
// // arr = require("fs")
// //   .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
// //   .toString()
// //   .trim()
// //   .split("\n");

// arr = arr.map((el) => el.split(""));
// n = 5;
// m = 5;
// // n = 2; //# 가로, 세로
// // m = 2;
// // arr = [
// //   [0, 0],
// //   [0, 1],
// // ]; //# 2차원 배열
// const dfsCombination = (Level, stack = [], result = []) => {
//   if (stack.length == 7) {
//     return result.push([...stack]);
//   }

//   for (let i = Level; i < n * m; i++) {
//     x = parseInt(i / m);
//     y = i % m;
//     if (arr[x][y] == 0) {
//       stack.push([x, y]);
//       dfsCombination(i + 1, stack, result);
//       stack.pop();
//     }
//   }
//   return result;
// };

// console.log(dfsCombination(0));

// // const dfs = (col, row) => {
// //   need = [];
// //   visited = Array.from(Array(5), () => new Array(5).fill(false));
// //   number = 0;
// //   answer = [];
// //   Y = 0;
// //   answer.push(arr[col][row]);
// //   need.push([col, row]);
// //   visited[col][row] = true;
// //   dx = [1, -1, 0, 0];
// //   dy = [0, 0, 1, -1];

// //   while (need.length > 0) {
// //     [c, r] = need.pop();
// //     if (arr[c][r] === "Y") {
// //       Y++;
// //     }
// //     // if()

// //     if (answer.length == 7) {
// //       return console.log(answer);
// //     }

// //     for (let i = 0; i < 4; i++) {
// //       nc = c + dx[i];
// //       nr = r + dy[i];

// //       if (
// //         0 <= nc &&
// //         nc < 5 &&
// //         0 <= nr &&
// //         nr < 5 &&
// //         !visited[nc][nr] &&
// //         7 - answer.length + count < 7
// //       ) {
// //         need.push([nc, nr]);
// //         answer.push(arr[nc][nr]);
// //         visited[nc][nr] = true;
// //       }
// //     }

// //     // number++;
// //   }
// // };

// // result = new Array(7);
// // combination(0, 0, 0);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();
input = input.map((v) => v.split(" ").map(Number));

let answer = "";
let K;
let S;

input.forEach((x) => {
  [K, ...S] = x;
  DFS(0, []);
  answer += "\n";
});

function DFS(L, pick) {
  if (pick.length === 6) {
    answer += `${pick.join(" ")}\n`;
    return;
  }
  for (let i = L; i < K; i++) {
    DFS(i + 1, [...pick, S[i]]);
  }
}

console.log(answer);

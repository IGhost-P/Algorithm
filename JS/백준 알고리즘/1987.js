// 1987 : 알파벳
/*

테이블 형식 => 상하좌우 인접칸중 한칸으로 가야하는데
지금 까지 지나온 모든 칸에 적혀있는 알파벳과는 달라야함

예제)
2 4
CAAB
ADCB

C -> A -> D (o) => 최대 3 더이상 못감

*/

testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[row, col] = testCase.shift().split(" ").map(Number);
arr = testCase.map((line) => line.split("").map((c) => c.charCodeAt(0) - 65)); // 숫자로 바꿔버림
console.log(arr);
const visited_a = Array(26).fill(false);
visited_a[arr[0][0]] = true;
p = [];
let length = 0;
let max = 0;
const check = (r, c) => {
  length++;
  if (length > max) {
    max = length;
  }
  directionX = [0, 0, 1, -1];
  directionY = [1, -1, 0, 0];
  for (let k = 0; k < 4; k++) {
    nx = r + directionX[k];
    ny = c + directionY[k];

    if (nx >= 0 && nx < row && ny >= 0 && ny < col && !visited_a[arr[nx][ny]]) {
      visited_a[arr[nx][ny]] = true;
      p.push(arr[nx][ny]);
      check(nx, ny);
    }
  }

  length--;
  visited_a[arr[r][c]] = false;
};

const solution = (arr) => {
  check(0, 0);
  console.log(max);
};
solution(arr);

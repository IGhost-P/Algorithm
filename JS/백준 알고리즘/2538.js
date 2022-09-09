// 2538 : 영역구하기
/**
 * 1. arr를 받고 맵을 채운다
 * 2. 이후 bfs를 돌려서 끝날때 마다 answerList에 추가후 정렬
 */

const [testCase, ...point] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./예제.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, K] = testCase.split(" ").map(Number);
const map = Array.from(Array(M), () => Array(N).fill(0));
const visited = Array.from(Array(M), () => Array(N).fill(false));
const answerList = [];
const pointList = point.map((el) => el.split(" ").map(Number));

pointList.forEach((el) => {
  const [startX, startY, endX, endY] = el;
  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      if (row >= startY && row < endY && col >= startX && col < endX) {
        map[row][col] = 1;
      }
    }
  }
});

const direactions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const bfs = (row, col) => {
  let queue = [[row, col]];
  let count = 0;
  visited[row][col] = true;
  while (queue.length > 0) {
    let [r, c] = queue.pop();
    count++;

    for (let i = 0; i < 4; i++) {
      let nr = r + direactions[i][0];
      let nc = c + direactions[i][1];
      if (nr < 0 || nr >= M || nc < 0 || nc >= N) continue;
      if (visited[nr][nc]) continue;
      if (map[nr][nc] === 1) continue;
      visited[nr][nc] = true;
      queue.push([nr, nc]);
    }
  }
  answerList.push(count);
};

let num = 0;

for (let row = 0; row < M; row++) {
  for (let col = 0; col < N; col++) {
    if (map[row][col] === 0 && !visited[row][col]) {
      visited[row][col] = true;
      num++;
      bfs(row, col);
    }
  }
}

console.log([num, [...answerList.sort((a, b) => a - b)].join(" ")].join("\n"));

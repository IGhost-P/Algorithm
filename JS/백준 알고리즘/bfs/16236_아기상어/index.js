[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
const map = arr.map((el) => el.split(" ").map(Number));
let shark = [0, 0];
let sharkSize = 2;
let sharkEat = 0;
let time = 0;
let isEat = false;
let isEnd = false;
let queue = [];
let distance = Array.from(Array(N), () => Array(N).fill(Infinity));

const bfs = (x, y) => {
  queue = [[x, y, 0]];
  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    if (distance[row][col] > dist) {
      distance[row][col] = dist;
      for (let i = 0; i < 4; i++) {
        let r = dy[i] + row;
        let c = dx[i] + col;
        if (r < 0 || r >= N || c < 0 || c >= N) continue;
        queue.push([r, c, dist + 1]);
      }
    }
  }
};

let canEat = [];

// 거리 만들기
for (let i = 0; i < N; i++) {
  for (j = 0; j < N; j++) {
    if (map[i][j] === 9) {
      console.log("악어다!");
      bfs(i, j);
      console.log(distance);
    }
  }
}

// 먹을수 있는 물고기 찾기
for (let i = 0; i < N; i++) {
  for (j = 0; j < N; j++) {
    if (map[i][j] !== 0 && map[i][j] !== 9 && map[i][j] <= sharkSize) {
      canEat.push([i, j, distance[i][j]]);
    }
  }
}

// 조건에 맞게 정렬
canEat.sort((a, b) => {
  if (a[2] === b[2]) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  }
  return a[2] - b[2];
});

console.log(canEat);

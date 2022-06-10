// 7569 : 토마토

/**
 *  익은 토마토에서, 다음 칸에 이동할때마다 하루씩 늘림 그럼 한칸씩만 가고 멈춰야 겠네
 * 3차원 배열을 만들고 BFS를 돌리면 될것 같은데..?
 */
[first, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[M, N, H] = first.split(" ").map(Number);
let tomatoBox = [];
for (let i = 0; i < H; i++) {
  tomatoBox[i] = arr
    .slice(N * i, N * (i + 1))
    .map((x) => x.split(" ").map(Number));
}

count = 0;
queue = [];
number = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatoBox[i][j][k] === 1) {
        queue.push([i, j, k]);
      }
    }
  }
}

dx = [-1, 1, 0, 0, 0, 0];
dy = [0, 0, 1, -1, 0, 0];
dz = [0, 0, 0, 0, 1, -1];

while (queue.length !== number) {
  [h, r, c] = queue[number];

  for (let i = 0; i < 6; i++) {
    nh = h + dx[i];
    nr = r + dy[i];
    nc = c + dz[i];

    if (
      nh >= 0 &&
      nh < H &&
      nr >= 0 &&
      nr < N &&
      nc >= 0 &&
      nc < M &&
      tomatoBox[nh][nr][nc] == 0
    ) {
      queue.push([nh, nr, nc]);
      tomatoBox[nh][nr][nc] = tomatoBox[h][r][c] + 1;
    }
  }
  number++;
}

flag = true;
day = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatoBox[i][j][k] === 0) {
        flag = false;
      }
      day = Math.max(day, tomatoBox[i][j][k]);
    }
  }
}

flag ? console.log(day - 1) : console.log(-1);
// console.log(count, H * N * M);

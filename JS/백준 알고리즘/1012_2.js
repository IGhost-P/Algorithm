/**
 * 1012 : 유기농 배추
 *
 * 이전에 풀어봤던 문제이다/
 * DFS나 BFS를 이용해 문제를 풀면된다
 *
 * sudo code:
 * 1. 1이 나오면 BFS를 이용해서 탐색을 한테
 * 2. 탐색 할때마다 0으로 바꿔준다
 * 3. 모든 탐색이 끝나면 count ++를 한다
 */

[T, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

while (testCase.length > 1) {
  let [M, N, K] = testCase
    .shift()
    .split(" ")
    .map((v) => parseInt(v));
  let map = Array.from(new Array(M), () => new Array(N).fill(0));
  let count = 0;
  for (let i = 0; i < K; i++) {
    [row, col] = testCase
      .shift()
      .split(" ")
      .map((v) => parseInt(v));
    map[row][col] = 1;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        let queue = [];
        queue.push([i, j]);
        while (queue.length > 0) {
          let [x, y] = queue.shift();
          if (map[x][y] === 1) {
            map[x][y] = 0;
            if (x - 1 >= 0) queue.push([x - 1, y]);
            if (x + 1 < M) queue.push([x + 1, y]);
            if (y - 1 >= 0) queue.push([x, y - 1]);
            if (y + 1 < N) queue.push([x, y + 1]);
          }
        }
        count++;
      }
    }
  }
  console.log(count);
}

// 2206 : 벽 부수구고 이동하기
/**
 * 시작점부터 시작해서 , 0인 칸만 이동을 하는데
 * 이때 , 1인 벽이 있으면 하만 부셔봄, 그고 0인 칸으로 이동을 하자
 *
 * 3차원 배열을 이용해 부서진 벽인지 아닌지 확인하면서 가자
 */

[first, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[N, M] = first.split(" ").map(Number);

const bfs = (arr, node) => {
  let queue = [];
  queue.push(node);
  isVisited[0][0][0] = 1;
  number = 0;
  while (number < queue.length) {
    let [r, c, w] = queue[number];
    if (r == N - 1 && c == M - 1) {
      return isVisited[r][c][w];
    }

    dx = [-1, 1, 0, 0];
    dy = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      let nr = r + dx[i];
      let nc = c + dy[i];

      if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
        if (arr[nr][nc] === 0 && isVisited[nr][nc][w] === 0) {
          isVisited[nr][nc][w] = isVisited[r][c][w] + 1;

          queue.push([nr, nc, w]);
        } else if (arr[nr][nc] === 1 && w === 0) {
          isVisited[nr][nc][w + 1] = isVisited[r][c][w] + 1;
          queue.push([nr, nc, w + 1]);
        }
      }
    }
    number++;
  }
  return -1;
};

isVisited = Array.from(Array(N), () => Array.from(Array(M), () => [0, 0]));

answer = 0;

map = [...arr.map((el) => [...el.split("").map(Number)])];

answer = bfs(map, [0, 0, 0]);

console.log(isVisited);
console.log(answer);

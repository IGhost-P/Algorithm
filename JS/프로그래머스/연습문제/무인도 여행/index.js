//bfs를 이용해서 무인도의 합을 구하면 되는 문제
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function solution(maps) {
  var answer = [];
  maps = maps.map((el) => el.split(""));

  const N = maps.length;
  const M = maps[0].length;

  const bfs = (startNode, N) => {
    let result = 0;
    const queue = [startNode];
    const visited = new Array(N)
      .fill(false)
      .map(() => new Array(M).fill(false));
    visited[startNode[0]][startNode[1]] = true;
    result += Number(maps[startNode[0]][startNode[1]]);
    maps[startNode[0]][startNode[1]] = "X";

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (maps[nx][ny] === "X") continue;
        if (visited[nx][ny]) continue;
        visited[nx][ny] = true;
        result += Number(maps[nx][ny]);
        maps[nx][ny] = "X";
        queue.push([nx, ny]);
      }
    }

    return result;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maps[i][j] !== "X") {
        answer.push(bfs([i, j], N));
      }
    }
  }

  answer.sort((a, b) => a - b);

  if (answer.length === 0) return [-1];

  return answer;
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1,1,27]

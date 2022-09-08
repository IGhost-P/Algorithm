const bfs = (row, col) => {
  let queue = [[row, col]];
  let count = 0;
  let visited = Array.from(Array(rowLen), () => Array(colLen).fill(false));
  visited[row][col] = true;

  while (queue.length > 0) {
    let [r, c] = queue.pop();
    if (r === rowLen - 1 && c === colLen - 1) return count;

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];
      if (nr < 0 || nr >= rowLen || nc < 0 || nc >= colLen) continue;
      if (visited[nr][nc]) continue;
      if (map[nr][nc] === 0) continue;
      visited[nr][nc] = true;
      queue.push([nr, nc]);
    }
    count++;
  }
};
function solution(maps) {
  dfs(0, 0);

  return "";
}

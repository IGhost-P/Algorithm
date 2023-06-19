// 미로까지에서 레버까지 가는 경로중 가장 작은 경로
// 레버에서 출구까지 가는 경로중 가장 작은 경로

const dfs = (maps, x, y, count) => {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let result = 0;

  if (x === n - 1 && y === m - 1) {
    return count;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === "O") {
      maps[nx][ny] = "X";
      const temp = dfs(maps, nx, ny, count + 1);
      maps[nx][ny] = "O";

      if (temp !== 0) {
        if (result === 0) {
          result = temp;
        } else {
          result = Math.min(result, temp);
        }
      }
    }
  }

  return result;
};

function solution(maps) {
  var answer = 0;

  const n = maps.length;

  if (n === 0) {
    return -1;
  }

  const m = maps[0].length;

  if (m === 0) {
    return -1;
  }

  maps[0][0] = 0;
  answer = dfs(maps, 0, 0, 1);

  if (answer === 0) {
    answer = -1;
  }

  return answer;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));

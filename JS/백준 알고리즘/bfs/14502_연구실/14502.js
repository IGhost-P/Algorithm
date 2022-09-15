// 14502 : 연구소

[NM, ...maps] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "14502.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map((el) => +el);
maps = maps.map((el) => el.split(" ").map((el) => +el));

const combination = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map((el) => [el]);
  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((el) => [fixer, ...el]);
    result.push(...combineFix);
  });
  return result;
};

const virus = [];
const empty = [];
const wall = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (maps[i][j] === 2) virus.push([i, j]);
    else if (maps[i][j] === 0) empty.push([i, j]);
    else if (maps[i][j] === 1) wall.push([i, j]);
  }
}

const combi = combination(empty, 3);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let max = 0;
for (let i = 0; i < combi.length; i++) {
  const temp = maps.map((el) => el.slice());
  for (let j = 0; j < combi[i].length; j++) {
    const [x, y] = combi[i][j];
    temp[x][y] = 1;
  }
  const queue = [...virus];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (temp[nx][ny] === 0) {
        temp[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }
  let count = 0;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (temp[j][k] === 0) count++;
    }
  }
  max = Math.max(max, count);
}
console.log(max);

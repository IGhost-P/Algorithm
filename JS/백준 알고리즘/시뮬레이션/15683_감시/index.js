[NM, ...map] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
map = map.map((el) => el.split(" ").map(Number));
const cctv = [];
const cctvDir = {
  1: [[0], [1], [2], [3]],
  2: [
    [0, 2],
    [1, 3],
  ],
  3: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  4: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  5: [[0, 1, 2, 3]],
};
const dir = [
  [-1, 0], // 상
  [0, 1], // 우
  [1, 0], // 하
  [0, -1], // 좌
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] !== 0 && map[i][j] !== 6) {
      cctv.push([i, j, map[i][j]]);
    }
  }
}

const count = (map) => {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) {
        cnt++;
      }
    }
  }

  return cnt;
};
/**
 * dfs
 *
 * @param {*} idx : cctv 순서
 * @param {*} map : cctv가 들어있는 맵
 * @returns
 */
const dfs = (idx, map) => {
  if (idx === cctv.length) {
    return count(map);
  }

  let [x, y, type] = cctv[idx];
  let ref = Infinity;
  for (let i = 0; i < cctvDir[type].length; i++) {
    // cctv 방향을 계속 돌릴것
    let copyMap = map.map((v) => [...v]);
    for (let j = 0; j < cctvDir[type][i].length; j++) {
      let d = cctvDir[type][i][j]; // cctv 방향 동,서,남,북을 뜻함
      let nx = x + dir[d][0];
      let ny = y + dir[d][1];
      while (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (copyMap[nx][ny] === 6) break; // 벽이면 멈춤
        if (copyMap[nx][ny] === 0) copyMap[nx][ny] = "#"; // 빈공간이면 채움
        // 해당 방향으로 전진
        nx += dir[d][0];
        ny += dir[d][1];
      }
    }

    ref = Math.min(ref, dfs(idx + 1, copyMap));
  }

  return ref;
};

console.log(dfs(0, map));

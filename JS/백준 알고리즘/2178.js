// 2178 : 미로 탐색
/*
bfs 를 돌리는데 
return이 n,m일때 돌리면될듯
상하좌우만 생각하고, 항상 도착 위치로 갈수있기때문에 문제없을것 같다
*/

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = testCase.shift().split(" ").map(Number);

// n이 세로줄, m이 가로줄
const map = testCase.map((el) => el.split("").map(Number));
let cnt = 0;
const dfs = (x, y) => {
  needVisit = [[y, x]];
  while (needVisit.length >= 1) {
    const [cy, cx] = needVisit.pop();
    if (cx == m - 1 && cy == n - 1) return;

    directX = [1, -1, 0, 0];
    directY = [0, 0, 1, -1];

    for (let i = 0; i < 4; i++) {
      y = cy - directY[i];
      x = cx - directX[i];

      if (0 <= x && x < m && 0 <= y && y < n) {
        if (map[y][x] === 1) {
          needVisit.push([y, x]);
          map[y][x] = map[cy][cx] + 1;
        }
      }
    }
  }
};

dfs(0, 0);
console.log(map[n - 1][m - 1], map);

// 4963 : 섬의 개수
/* 

가로세로대각선에 섬이 있으면, 방문 가능

모든 섬을 돌면서 방문이 총 dfs몇번 이루어 졌는지 확인하면 될것 같음 = 섬의 개수

sudo code:
1. 2차원 배열을 받는다
2. 모두 false로 만든다
3. 섬 표시는 true로 만든다
4. island[0][0] 부터 순차 탐색을 진행 하며 true일 경우 dfs를 돌린다
    3 -1 dfs의 조건은 좌우상하대각선이에 ture가 있으면 dfs를 재귀적으로 돌린다
5. dfs가 끝나면 answer += 1을 해준다
*/

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
let answer = 0;
const dfs = (cm, cn) => {
  visited = [];
  needVisit = [[cm, cn]];

  while (needVisit.length >= 1) {
    [cm, cn] = needVisit.pop();

    directX = [1, -1, 0, 0, 1, -1, -1, 1];
    directY = [0, 0, 1, -1, 1, -1, 1, -1];

    for (let i = 0; i < 8; i++) {
      x = cn + directX[i];
      y = cm + directY[i];

      if (0 <= x && x < n && 0 <= y && y < m) {
        if (map[y][x]) {
          needVisit.push([y, x]);
          map[y][x] = false;
        }
      }
    }
  }
  answer += 1;
};

const solution = (n, m, arr) => {
  map = Array.from(Array(m), () => new Array(n).fill(false));
  //   console.log(map); // , m이 row, n이 col

  // make isLand
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) {
        map[i][j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j]) {
        // console.log(n, m);
        dfs(i, j);
      }
    }
  }
};

while (testCase[0] != "0 0") {
  [n, m] = testCase.shift().split(" ").map(Number);
  arr = testCase.splice(0, m).map((el) => el.split(" ").map(Number));
  //   console.log(n, m, arr, testCase);
  answer = 0;
  solution(n, m, arr);
  console.log(answer);
}

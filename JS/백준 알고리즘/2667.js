// 2667 : 단지번호붙이기

[N, ...arr] = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

map = arr.map((el) => el.split("").map(Number));
let cnt = 0;
let answer = 0;
let answerLi = [];
const dfs = (cm, cn) => {
  cnt = 0;
  visited = [];
  needVisit = [[cm, cn]];

  while (needVisit.length >= 1) {
    [cm, cn] = needVisit.pop();

    directX = [1, -1, 0, 0];
    directY = [0, 0, 1, -1];

    for (let i = 0; i < 8; i++) {
      y = cm + directY[i];
      x = cn + directX[i];
      if (0 <= x && x < N && 0 <= y && y < N) {
        if (map[y][x]) {
          needVisit.push([y, x]);
          map[y][x] = 0;
          cnt++;
        }
      }
    }
  }
  if (cnt == 0) {
    cnt = 1;
  }
};

const solution = (n, m) => {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] == 1) {
        // console.log(n, m);

        dfs(i, j);
        answerLi.push(cnt);
        answer += 1;
      }
    }
  }
  answerLi.sort((a, b) => a - b);
  console.log(answer + "\n" + answerLi.join("\n"));
};

solution(N, N);

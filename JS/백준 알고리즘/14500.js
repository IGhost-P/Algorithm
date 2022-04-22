// 14500 : 테트로미노
/**
 * 테크노미노가 들어갈수 있는지, 들어갈수 있다면 합을 정하면 될듯
 * 1. 테크노미노는 어차피 5개 일뿐 들갈수 있는지 없는지를 판단해 돌리면 될듯?
 *
 * sudo code:
 * 1. 테크노미노를 만든다
 *  1-1 일자형 = j+4 안에 들어올수 있는지
 *  1-2 네모형 = i+1, j+1 안에 들어 올수 있는지
 *  1-3 3번째 = i+3, i+3 && j+1 안에 들어올수 있는지
 *  1-4 4번째 = i+4, i+4 %% j+1
 *  1-5 5번째 , .. 여튼 만들자
 * 2. 테크노미노가 들어갈수 있는지 모두 파악한다
 * 3. 들어갈수있으면 answer에 넣고 최대값을 구한다
 *
 * 또는 dfs를 이용하는것
 * 1. 사방으로 dfs를 돌린다
 * 2. dfs cnt가 4가 되면 멈추고 더한다, => 반복
 */

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stidn" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[N, M] = testCase.shift().split(" ").map(Number);
field = testCase.map((el) => el.split(" ").map(Number));

answerList = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function DFS(x, y) {
  console.log(
    "과정",
    x,
    y,
    "필드값",
    field[x][y],
    "카운트",
    cnt,
    "정답 리스트",
    answerList
  );
  if (cnt === 4) {
    return answerList.push(answer);
  }

  answer.push(field[x][y] + "->");
  cnt += 1;
  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      DFS(nx, ny);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answer = [];
    answerList = [];
    cnt = 0;
    console.log("시작", i, j);
    DFS(i, j);
  }
}
console.log(Math.max(...answerList));

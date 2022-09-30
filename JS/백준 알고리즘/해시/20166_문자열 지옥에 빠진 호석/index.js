// 20166 : 문자열 지옥에 빠진 호석
/**
 * 배열을 8향으로 돌면서 해쉬 맵을 만들고, 반복문으 돌리면서 가능한 경우에만 count를 넣으면될것 같다
 */

[testCase, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "testCase.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = testCase.split(" ").map(Number);
const arr = input.splice(0, N).map((el) => el.split(""));

const dr = [1, 0, -1, 0, 1, 1, -1, -1];
const dc = [0, 1, 0, -1, -1, 1, 1, -1];
const map = {};

const bfs = (r, c, prev) => {
  const currnet = prev + arr[r][c];
  map[currnet] = map[currnet] ? map[currnet] + 1 : 1;

  if (currnet.length < 5) {
    for (let i = 0; i < 8; i++) {
      const nr = (r + dr[i] + N) % N;
      const nc = (c + dc[i] + M) % M;
      bfs(nr, nc, currnet);
    }
  }
};

const solution = () => {
  let answer = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      bfs(i, j, "");
    }
  }
  for (let i = 0; i < K; i++) {
    const keyword = input[i];
    answer += map[keyword] ? map[keyword] + "\n" : 0 + "\n";
  }
  return answer;
};
console.log(solution());

function temp() {
  ARray.prototype.splice = function (start, deleteCount, ...items) {
    if (start < 0) {
      start = this.length + start;
    }

    if (start > this.length) {
      start = this.length;
    }

    if (start < 0) {
      start = 0;
    }

    if (deleteCount === undefined) {
      deleteCount = this.length - start;
    }
  };
}

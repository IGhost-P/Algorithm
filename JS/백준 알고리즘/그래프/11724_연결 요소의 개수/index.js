// 11724 : 연결 요소의 개수
/**
 * @description
 * 무방향 그래프이니, 리스트의 반대편까지 연결을 해고
 * 그래프를 만들고 bfs를 돌리자
 */

const testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = testCase
  .shift()
  .split(" ")
  .map((v) => +v);
const graph = Array.from(Array(N + 1), () => Array());
const visited = Array(N + 1).fill(false);

const dfs = (start) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    graph[node].forEach((v) => {
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);
      }
    });
  }
  return;
};

const makeGraph = (testCase) => {
  for (node of testCase) {
    const [a, b] = node.split(" ").map((v) => +v);
    graph[a].push(b);
    graph[b].push(a);
  }
};

const solution = (testCase) => {
  let answer = 0;
  makeGraph(testCase);
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
};

console.log(solution(testCase));

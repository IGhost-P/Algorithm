/**
 * A가 B 앞에 : A->B 이는 B의 indegree가 +1이 된다는것을 의미한다.
 * indegree가 0인 노드를 큐에 넣고, 큐에서 빼면서 indegree를 -1해준다.
 *
 * sudo code:
 * 1. indegreeArr를 구한다.
 * 2. 구하면서 연결리스트로 간선을 만든다
 * 3. bfs를 돌면서 indegree가 0인 노드를 큐에 넣는다.
 */

const testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = testCase
  .shift()
  .split(" ")
  .map((v) => +v);
const indegreeArr = Array(N + 1).fill(0);
const graph = Array.from(Array(N + 1), () => Array());
const queue = [];

const makeGraph = (testCase) => {
  for (let el of testCase) {
    const [a, b] = el.split(" ").map((v) => +v);
    indegreeArr[b]++;
    graph[a].push(b);
  }
};

const bfs = () => {
  let result = "";
  while (queue.length) {
    const cur = queue.shift();
    result += `${cur} `;
    graph[cur].forEach((v) => {
      indegreeArr[v]--;
      if (indegreeArr[v] === 0) queue.push(v);
    });
  }
  return result;
};

const solution = () => {
  makeGraph(testCase);
  for (let i = 1; i <= N; i++) {
    if (indegreeArr[i] === 0) queue.push(i);
  }
  return bfs();
};

console.log(solution());

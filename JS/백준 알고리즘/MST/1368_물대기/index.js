/**
 * 1368번 물대기
 * https://www.acmicpc.net/problem/1368
 *
 * ## 문제풀이
 * - 일단 우물을 파야하기 때문에 가장 적은 비용이 드는 우물을 파야한다.
 * - 크루스칼 알고리즘을 이용을 하지만 우물을 파는 비용까지 고려를 해야한다, 그렇다면 노드 하나를 추가해서 우물을 파는 비용을 추가해야한다.
 */

const fs = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = Number(fs.shift());

const W = [];
for (let i = 0; i < N; i++) {
  W.push(+fs.shift());
}

const graph = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 0; i < N; i++) {
  graph[i] = fs
    .shift()
    .split(" ")
    .map((v) => +v);
}

const realGraph = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= N; j++) {
    if (i === j) continue;

    if (j === N) {
      realGraph.push([i, j, W[i]]);
      continue;
    }

    realGraph.push([i, j, graph[i][j]]);
  }
}

const parent = Array.from(N).fill(0);
const rank = Array.from(N).fill(0);

const makeSet = () => {
  for (let i = 0; i < N; i++) {
    parent[i] = i;
    rank[i] = 0;
  }
};

const find = (node) => {
  if (parent[node] === node) {
    return node;
  }
  return (parent[node] = find(parent[node]));
};

const union = (node1, node2) => {
  const parent1 = find(node1);
  const parent2 = find(node2);

  if (parent1 === parent2) {
    return;
  }

  if (rank[parent1] > rank[parent2]) {
    parent[parent2] = parent1;
  } else {
    parent[parent1] = parent2;
    if (rank[parent1] === rank[parent2]) {
      rank[parent2]++;
    }
  }
};

const kruskal = () => {
  let result = 0;

  makeSet();

  realGraph.sort((a, b) => a[2] - b[2]);

  for (let [a, b, c] of realGraph) {
    if (find(a) !== find(b)) {
      union(a, b);
      result += c;
    }
  }

  return result;
};

console.log(kruskal());

const [N, M, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v || v);

/**
 * 크루스칼 알고리즘을 이용해볼 것이다,
 * 1. makeSet을 통해 각 노드의 부모를 자기 자신으로 초기화한다., rank는 0으로 초기화한다.
 * 2. 간선을 오름차순으로 정렬한다.
 * 3. 간선을 하나씩 꺼내면서, 두 노드의 부모가 같지 않다면, union을 해준다.(이때, rank가 더 높은 노드를 부모로 설정한다.)
 * 4. 간선의 가중치를 더해준다.
 * 5. 모든 간선을 탐색하면, 간선의 가중치를 출력한다.
 */

const graph = testCase.map((v) => v.split(" ").map((v) => +v));

const makeSet = (N) => {
  const parent = Array(N + 1).fill(0);
  const rank = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    parent[i] = i;
  }
  return [parent, rank];
};
const [parent, rank] = makeSet(N);

const find = (x) => {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
};

const union = (x, y) => {
  x = find(x);
  y = find(y);
  if (x === y) return;
  if (rank[x] > rank[y]) {
    parent[y] = x;
  } else {
    parent[x] = y;
    if (rank[x] === rank[y]) rank[y]++;
  }
};

const kruskal = () => {
  let result = 0;
  graph.sort((a, b) => a[2] - b[2]);
  for (let [a, b, c] of graph) {
    if (find(a) !== find(b)) {
      union(a, b);
      result += c;
    }
  }
  return result;
};

console.log(kruskal());

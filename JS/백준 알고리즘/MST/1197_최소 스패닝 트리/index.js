const [VE, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v || v);

const [V, E] = VE.split(" ").map((v) => +v);
const graph = testCase.map((v) => v.split(" ").map((v) => +v));
const parent = Array.from(V + 1).fill(0);
const rank = Array.from(V + 1).fill(0);

const makeSet = () => {
  for (let i = 1; i <= V; i++) {
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
  graph.sort((a, b) => a[2] - b[2]);

  makeSet();

  for (let [a, b, c] of graph) {
    if (find(a) !== find(b)) {
      union(a, b);
      result += c;
    }
  }
  return result;
};

console.log(kruskal());

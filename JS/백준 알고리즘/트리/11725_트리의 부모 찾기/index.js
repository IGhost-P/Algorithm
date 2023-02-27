const textCase = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +textCase.shift();

const graph = Array.from(Array(N + 1), () => Array());
const parent = Array(N + 1).fill(0);
parent[1] = 1;
const bfs = (start) => {
  const queue = [start];
  while (queue.length) {
    const cur = queue.shift();
    if (parent[cur] === 0) continue;
    graph[cur].forEach((v) => {
      if (parent[v] === 0) {
        parent[v] = cur;
        queue.push(v);
      }
    });
  }
};

const solution = () => {
  for (let el of textCase) {
    const [a, b] = el.split(" ").map((v) => +v);
    graph[a].push(b);
    graph[b].push(a);
  }

  bfs(1);

  return parent.slice(2).join("\n");
};

console.log(solution());

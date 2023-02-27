// 11404 : 플로이드
/**
 * N = 노드이 개수
 * M = 간선의 개수
 * ...testCase = 간선의 정보 ( a b c : a에서 b로 가는 비용이 c )
 */

let [N, M, ...testCase] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

N = +N;
M = +M;

let graph = Array.from(Array(N), () => Array(N).fill(Infinity));

const floyd = (graph) => {
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }
};

const init = (graph) => {
  for (let i = 0; i < N; i++) {
    graph[i][i] = 0;
  }

  testCase.forEach((v) => {
    const [a, b, c] = v.split(" ").map((v) => +v);
    graph[a - 1][b - 1] = Math.min(graph[a - 1][b - 1], c);
  });
};

const solution = () => {
  init(graph);
  floyd(graph);

  graph.forEach((v) => {
    v.forEach((v, i) => {
      if (v === Infinity) {
        v = 0;
      }
      process.stdout.write(v + " ");
    });
    console.log();
  });
};

solution();

// 효율적인 해킹
/*
해킹을 하려면 A가 B를 신뢰하는 경우 해킹 가능 => 인접 노드라 생각
즉 DFS를 돌려 방문 가능할떄까지 하고,

그중 가장  많이 해킹을 많이 할수 있는 컴퓨터 번호를 출력 => 번호를 따로 저장해야할듯
*/

input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
[N, M] = input.shift().split(" ").map(Number);
tree = Array.from(Array(N + 1), () => Array().fill([]));
for (let i = 0; i < M; i++) {
  [from, to] = input[i].split(" ").map(Number);
  tree[to].push(from);
}

let count = Array(N + 1).fill(1);
let visited = new Array(N + 1).fill(false);
let result = [];

const DFS = function (startNode, computer) {
  visited[computer] = true;
  if (tree[computer].length === 0) {
    return;
  }
  for (let i = 0; i < tree[computer].length; i++) {
    const nextNode = tree[computer][i];
    if (!visited[nextNode]) {
      count[startNode]++;
      DFS(startNode, nextNode);
    }
  }
};
let max;
const solutuion = () => {
  for (let i = 1; i <= N; i++) {
    DFS(i, i);
    visited.fill(false);
  }
  max = Math.max(...count);
  for (let i = 1; i < count.length; i++) {
    if (count[i] === max) result.push(i);
  }
  console.log(result.join(" "));
};
solutuion();

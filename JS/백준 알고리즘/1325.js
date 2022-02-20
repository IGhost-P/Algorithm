// 효율적인 해킹
/*
해킹을 하려면 A가 B를 신뢰하는 경우 해킹 가능 => 인접 노드라 생각
즉 DFS를 돌려 방문 가능할떄까지 하고,

그중 가장  많이 해킹을 많이 할수 있는 컴퓨터 번호를 출력 => 번호를 따로 저장해야할듯
*/

input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
[N, M] = input.shift().split(" ").map(Number);
tree = Array.from(Array(N + 1), () => Array().fill([]));
let answerList = [];
for (let i = 0; i < M; i++) {
  [from, to] = input[i].split(" ");
  tree[to].push(from);
}

let cnt;
let cntMax = [];

const BFS = function (visited, startNode) {
  visited[startNode] = true;
  q = [];
  q.push(startNode);
  cnt = 1;
  while (q.length > 0) {
    curNode = q.shift();
    tree[curNode].forEach((el) => {
      if (!visited[el]) {
        q.push(el);
        visited[el] = true;
        cnt++;
      }
    });
  }
};
let visited = new Array(N + 1).fill(false);
let maxValue = -1;

const solutuion = () => {
  for (let i = 1; i <= N; i++) {
    startNode = i;
    visited.fill(false);
    if (!visited[startNode]) {
      BFS(visited, startNode);
      //   console.log(visited, startNode, cnt);
      if (cnt > maxValue) {
        answerList.push(startNode);
        maxValue = cnt;
      } else if (cnt == maxValue) {
        answerList.push(startNode);
      }
    }
  }
};
solutuion();
console.log(answerList.join(" ") || 0);

// DFS와 BFS

// 입력값 받기
const testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

// 첫째줄 : 정점의 개수 N , 간선의 개수 M, 탐색을 시작할 정점의 번호 V
const [N, M, V] = testCase.shift().split(" ").map(Number);
// 두번째 줄 부터 ~ 마지막 : 간선이 연결된 두 정점
const arr = testCase.map((el) => el.split(" ").map(Number));

// Map 만들기
const grahp = new Map();
arr.forEach((el) => {
  [from, to] = el;
  if (!grahp.get(from)) {
    grahp.set(from, []);
  }

  if (!grahp.get(to)) {
    grahp.set(to, []);
  }

  grahp.get(from).push(to);
  grahp.get(to).push(from);
});

// console.log(grahp);
// dfs 만들기 : recusive 를 이용해서
/* 
sudo code;
1. node와 방문한 리스트를 받아온다
2. 해당 노드를 방문 리스트에 넣는다 (방문 가능해서 dfs를 돌리는것이기 때문)
3. 해당 노드와 연결된 리스트를 순회하면서, 만약 아직 방문하지 않았다면 재귀를 보낸다
4. 더이상 방문하지 않은 곳이 없다면 방문 리스트를 내보낸다
*/
const dfsRecusive = (node, visited = []) => {
  visited.push(node);
  grahp.get(node).map((el) => {
    if (!visited.includes(el)) {
      visited = dfsRecusive(el, visited);
    }
  });
  return visited;
};

// dfs 만들기 : stack 2개를  이용해서
const dfsStack = (node) => {
  visited = [];
  needVisit = [];
  needVisit.push(node);
  while (needVisit.length >= 1) {
    curNode = needVisit.pop();
    if (!visited.includes(curNode)) {
      visited.push(curNode);
      needVisit = needVisit.concat(grahp.get(curNode));
    }
  }
  return visited;
};

// bfs 만들기 : stack + queue를 이용해서
const bfsQueue = (node) => {
  visited = [];
  needVisit = [];
  needVisit.push(node);
  while (needVisit.length >= 1) {
    curNode = needVisit.shift();
    if (!visited.includes(curNode)) {
      visited.push(curNode);
      needVisit = needVisit.concat(grahp.get(curNode));
    }
  }
  return visited;
};

// console.log(...dfsStack(V));
grahp.forEach((el) => el.sort((a, b) => b - a));
console.log(dfsStack(V).join(" ").trim());
grahp.forEach((el) => el.sort((a, b) => a - b));
console.log(bfsQueue(V).join(" ").trim());

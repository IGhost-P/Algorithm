// 트리 순회
[treeNum, ...testCase] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let tree = {};
for (let i = 0; i < treeNum; i++) {
  [value, left, right] = testCase[i].split(" ");
  tree[value] = [left, right];
}

let result = "";

function preorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  result += node;
  preorder(lt);
  preorder(rt);
}
// 전위순회는 루트부터 기록을 시작하므로, 재귀의 맨 앞에서 우선 기록한다.

function inorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inorder(lt);
  result += node;
  inorder(rt);
}
// 중위순회는 왼쪽-루트-오른쪽 순이므로, 왼쪽의 재귀가 끝난 시점에서 기록한다.

function postorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postorder(lt);
  postorder(rt);
  result += node;
}
// 후위순회는 왼쪽-오른쪽-루트 순이므로, 왼쪽과 오른쪽 재귀가 끝난 시점에서 기록한다.

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

// return result;

console.log(result);

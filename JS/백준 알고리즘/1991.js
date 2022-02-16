// 트리 순회
const BinaryTreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

[treeNum, ...testCase] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let tree = {};
for (let i = 0; i < treeNum; i++) {
  [value, left, right] = testCase[i].split(" ");
  tree[value] = new BinaryTreeNode(value, left, right);
}

let result = "";

function preorder(node) {
  if (node === ".") return;
  result += node;
  preorder(tree[node].left);
  preorder(tree[node].right);
}
// 전위순회는 루트부터 기록을 시작하므로, 재귀의 맨 앞에서 우선 기록한다.

function inorder(node) {
  if (node === ".") return;
  inorder(tree[node].left);
  result += node;
  inorder(tree[node].right);
}
// // 중위순회는 왼쪽-루트-오른쪽 순이므로, 왼쪽의 재귀가 끝난 시점에서 기록한다.

function postorder(node) {
  if (node === ".") return;
  postorder(tree[node].left);
  postorder(tree[node].right);
  result += node;
}
// // 후위순회는 왼쪽-오른쪽-루트 순이므로, 왼쪽과 오른쪽 재귀가 끝난 시점에서 기록한다.

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);

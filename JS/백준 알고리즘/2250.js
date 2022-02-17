// 트리의 높이와 너비
[testCase, ...nodeList] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

//
testCase = Number(testCase);
let tree = [];
let result = "";
let root = -1;
let x = 1;
let levelDepth = 1;
let levelMin = [testCase];
let levelMax = [0];

class Tree {
  constructor(value, left, right) {
    this.parent = -1;
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

for (let i = 1; i <= testCase; i++) {
  tree[i] = new Tree(i, -1, -1);
  levelMin.push(testCase);
  levelMax.push(0);
}
// tree = tree.slice(1);

const inorder = (node, level) => {
  levelDepth = Math.max(levelDepth, level);
  if (tree[node].left != -1) {
    inorder(tree[tree[node].left].value, level + 1);
  }
  levelMin[level] = Math.min(levelMin[level], x);
  levelMax[level] = Math.max(levelMax[level], x);
  x++;
  if (tree[node].right != -1) {
    inorder(tree[tree[node].right].value, level + 1);
  }
};

for (let i = 0; i < testCase; i++) {
  [value, left, right] = nodeList[i].split(" ").map(Number);
  tree[value].left = left;
  tree[value].right = right;

  if (left != -1) {
    tree[left].parent = value;
  }
  if (right != -1) {
    tree[right].parent = value;
  }
}

for (let i = 1; i <= testCase; i++) {
  if (tree[i].parent == -1) {
    root = i;
  }
}

inorder(root, 1);

let resultLevel = 1;
let resultWidth = levelMax[1] - levelMin[1] + 1;

for (let i = 2; i <= levelDepth; i++) {
  let width = levelMax[i] - levelMin[i] + 1;
  if (resultWidth < width) {
    resultLevel = i;
    resultWidth = width;
  }
}

console.log(resultLevel, resultWidth);

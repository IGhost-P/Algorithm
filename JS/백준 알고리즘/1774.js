input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");

// variable
let point = [];
let grahp = [];
let parent = [];
let rank = [];
let answer = 0;

// Helper function
function getDist(point1, point2) {
  X = Math.abs(point1[0] - point2[0]);
  Y = Math.abs(point1[1] - point2[1]);
  return Math.sqrt(X * X + Y * Y);
}

// kruskal Algorithm : find function
function find(node) {
  if (parent[node] != node) {
    parent[node] = find(parent[node]);
  }
  return parent[node];
}
// kruskal Algorithm : union function
function union(node1, node2) {
  root1 = find(node1);
  root2 = find(node2);

  if (rank[root1] > rank[root2]) {
    parent[root2] = root1;
  } else {
    parent[root1] = root2;
    if (rank[root1] == rank[root2]) rank[root2] += 1;
  }
}

// kruskal Algorithm : makeSet function
function makeSet(node) {
  parent[node] = node;
  rank[node] = 0;
}
// Main function
function solution(input) {
  // 1st line
  [godNum, already] = input.shift().split(" ").map(Number);

  // 2nd line
  for (let i = 0; i < godNum; i++) {
    [x, y] = input[i].split(" ").map(Number);
    point.push([x, y]);

    // make node
    makeSet(i);
  }

  // make grahp
  for (let i = 0; i < point.length; i++) {
    for (let j = i + 1; j < point.length; j++) {
      grahp.push([getDist(point[i], point[j]), i, j]);
    }
  }

  // already union
  for (let j = godNum; j < godNum + already; j++) {
    // put in already union
    [node1, node2] = input[j].split(" ").map(Number);
    union(node1 - 1, node2 - 1);
  }

  // grahp sort
  grahp.sort((a, b) => a[0] - b[0]);
  console.log(grahp);
  grahp.forEach((el) => {
    [dist, from, to] = el;
    if (find(from) != find(to)) {
      union(from, to);
      answer += dist;
    }
  });

  console.log(answer.toFixed(2));
}
solution(input);

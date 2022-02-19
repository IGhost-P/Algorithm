[subin, sister] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = 0;
let visited = new Array(100001).fill(0);
let q = [];
const findSister = (subin, sister, oper) => {
  let q = [];
  q.push(subin);
  while (q) {
    key = q.shift();
    if (key == sister) {
      return visited[key];
    }
    if (0 <= key - 1 && key < 100001 && !visited[key - 1]) {
      visited[key - 1] = visited[key] + 1;
      q.push(key - 1);
    }
    if (0 <= key + 1 && key < 100001 && !visited[key + 1]) {
      visited[key + 1] = visited[key] + 1;
      q.push(key + 1);
    }
    if (0 <= key * 2 && key < 100001 && !visited[key * 2]) {
      visited[key * 2] = visited[key] + 1;
      q.push(key * 2);
    }
  }
};

const solution = function () {
  console.log(findSister(subin, sister));
};
solution();

const fs = require("fs");
const { off } = require("process");
let [_, ...arr] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
arr = arr.map((el) => el.split(" ").map((el) => +el));

arr = arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
// console.log(arr);
for (let i = 0; i < _; i++) {
  priorityQueue.enqueue(arr[i][1], arr[i][0]);
  const dead = arr[i][0];
  if (priorityQueue.heap.length > dead) {
    priorityQueue.dequeue();
  }
}
const result = priorityQueue.heap.reduce((acc, cur) => acc + cur.key, 0);
console.log(result);

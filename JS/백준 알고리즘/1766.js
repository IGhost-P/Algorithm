// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   getLength = () => {
//     return this.heap.length;
//   };

//   push = (node) => {
//     this.heap.push(node);
//     let i = this.heap.length - 1;
//     let parentI = Math.floor((i - 1) / 2);
//     while (i > 0 && this.heap[parentI] > this.heap[i]) {
//       this.swap(i, parentI);
//       i = parentI;
//       parentI = Math.floor((i - 1) / 2);
//     }
//   };

//   pop = () => {
//     if (this.heap.length === 1) {
//       return this.heap.pop();
//     }

//     const result = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     let i = 0;
//     while (true) {
//       const leftI = i * 2 + 1,
//         rightI = i * 2 + 2;
//       if (leftI >= this.heap.size) {
//         break;
//       }
//       let nextI = i;
//       if (this.heap[nextI] > this.heap[leftI]) {
//         nextI = leftI;
//       }
//       if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
//         nextI = rightI;
//       }
//       if (nextI === i) {
//         break;
//       }
//       this.swap(i, nextI);
//       i = nextI;
//     }
//     return result;
//   };

//   swap = (a, b) => {
//     const temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   };
// }
// const strToNumArr = (str) => str.split(" ").map(Number);

// [testCase, ...arr] = require("fs")
//   .readFileSync("예제.txt")
//   .toString()
//   .trim()
//   .split("\n");

// [testNum, forNum] = testCase.split(" ").map(Number);
// let topology = [];
// let indegree = new Array(testNum + 1).fill(0);
// const heapq = new MinHeap();
// let result = [];

// for (let i = 0; i <= testNum; i++) {
//   topology.push([]);
// }
// arr.forEach((str) => {
//   const [prev, next] = strToNumArr(str);
//   topology[prev].push(next);
//   indegree[next] += 1;
// });

// for (let i = 1; i <= testNum; i++) {
//   if (indegree[i] == 0) {
//     heapq.push(i);
//   }
// }

// while (heapq.getLength()) {
//   // console.log(heapq);
//   data = heapq.pop();
//   result.push(data);
//   topology[data].forEach((v, i) => {
//     indegree[v]--;
//     if (!indegree[v]) {
//       heapq.push(v);
//     }
//   });
// }

// console.log(result.join(" "));

// // const strToNumArr = (str) => str.split(" ").map(Number);

// // class MinHeap {
// //   constructor() {
// //     this.heap = [];
// //   }

// //   getLength = () => {
// //     return this.heap.length;
// //   };

// //   push = (node) => {
// //     this.heap.push(node);
// //     let i = this.heap.length - 1;
// //     let parentI = Math.floor((i - 1) / 2);
// //     while (i > 0 && this.heap[parentI] > this.heap[i]) {
// //       this.swap(i, parentI);
// //       i = parentI;
// //       parentI = Math.floor((i - 1) / 2);
// //     }
// //   };

// //   pop = () => {
// //     if (this.heap.length === 1) {
// //       return this.heap.pop();
// //     }

// //     const result = this.heap[0];
// //     this.heap[0] = this.heap.pop();
// //     let i = 0;
// //     while (true) {
// //       const leftI = i * 2 + 1,
// //         rightI = i * 2 + 2;
// //       if (leftI >= this.heap.size) {
// //         break;
// //       }
// //       let nextI = i;
// //       if (this.heap[nextI] > this.heap[leftI]) {
// //         nextI = leftI;
// //       }
// //       if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
// //         nextI = rightI;
// //       }
// //       if (nextI === i) {
// //         break;
// //       }
// //       this.swap(i, nextI);
// //       i = nextI;
// //     }
// //     return result;
// //   };

// //   swap = (a, b) => {
// //     const temp = this.heap[a];
// //     this.heap[a] = this.heap[b];
// //     this.heap[b] = temp;
// //   };
// // }

// // input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
// // const [N, M] = strToNumArr(input.shift());
// // const graph = [];
// // const inDegrees = Array(N + 1).fill(0);
// // for (let i = 0; i <= N; i++) {
// //   graph.push([]);
// // }

// // input.forEach((str) => {
// //   const [prev, next] = strToNumArr(str);
// //   graph[prev].push(next);
// //   inDegrees[next] += 1;
// // });

// // const pq = new MinHeap();
// // for (let n = 1; n <= N; n++) {
// //   if (inDegrees[n] === 0) {
// //     pq.push(n);
// //   }
// // }

// // const result = [];
// // console.log(graph);
// // console.log(inDegrees);
// // while (pq.getLength()) {
// //   const n = pq.pop();
// //   result.push(n);
// //   graph[n].forEach((v) => {
// //     inDegrees[v] -= 1;
// //     if (!inDegrees[v]) {
// //       pq.push(v);
// //     }
// //   });
// // }

// // console.log(result.join(" "));
class Heap {
  constructor() {
    this.heap = [null];
    this._size = 0;
    this.operator = function (a, b) {
      return a < b;
    };
  }
  size() {
    return this._size;
  }
  // 힙 push
  push(x) {
    this.heap[++this._size] = x;
    for (var cur = this._size; cur > 1; cur >>= 1) {
      var half = cur >> 1;
      if (this.operator(this.heap[cur], this.heap[half])) {
        var temp = this.heap[cur];
        this.heap[cur] = this.heap[half];
        this.heap[half] = temp;
      } else {
        break;
      }
    }
  }
  // 힙 pop
  pop() {
    if (this._size === 0) return;
    const returnVal = this.heap[1];
    this.heap[1] = this.heap[this._size--];
    var child;
    for (var cur = 1; cur << 1 <= this._size; cur = child) {
      var dC = cur << 1;
      if (
        dC + 1 > this._size ||
        this.operator(this.heap[dC], this.heap[dC + 1])
      ) {
        child = dC;
      } else {
        child = dC + 1;
      }
      if (this.operator(this.heap[child], this.heap[cur])) {
        var temp = this.heap[cur];
        this.heap[cur] = this.heap[child];
        this.heap[child] = temp;
      } else {
        break;
      }
    }
    return returnVal;
  }
}

const [num, ...no] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
const [numProblem, problemInfo] = num.split(" ").map((i) => parseInt(i));
const node = no.map((i) => i.split(" ").map((j) => parseInt(j)));
const heap = new Heap();
// 연결된 간선의 갯수를 저장하는 배열입니다.
const indegree = new Array(numProblem + 1).fill(0);
// 노드의 연결 관계를 나타내는 배열입니다.
const array = new Array(numProblem + 1).fill(null);
const answer = [];

for (let i = 1; i <= problemInfo; i++) {
  const [x, y] = node[i - 1];

  if (!array[x]) array[x] = [];
  if (!array[y]) array[y] = [];
  // 먼저 풀어야 하는 문제 기준으로 이후에 푸는 문제를 구성합니다.
  // ex) 3 -> [1], 4 -> [2]
  array[x].push(y);
  // 이후에 풀어야하는 문제는 먼저 풀어야하는 노드와 연결했기 때문에 간선의 갯수를 카운팅합니다.
  indegree[y] += 1;
}
// 출발 노드를 체크해, 해당 노드를 힙에 넣습니다.
for (let i = 1; i <= numProblem; i++) if (indegree[i] === 0) heap.push(i);

// 모든 노드를 방문할 때 까지
while (heap.size()) {
  // 힙에 있는 출발 노드를 뽑아냅니다.
  const node = heap.pop();
  answer.push(node);
  // 해당 노드와 연결되어 있는 노드의 간선을 삭제합니다.
  for (let i = 1, length = array[node].length; i <= length; i++) {
    const idx = array[node][i - 1];
    // 연결되어있는 출발 노드가 pop되었기 때문에 해당 간선을 삭제합니다.
    indegree[idx] -= 1;
    // 삭제하였더니, 해당 노드가 출발 노드가 되었다면 힙에 넣습니다.
    if (indegree[idx] === 0) heap.push(idx);
  }
}

// console.log(answer.join(" "));

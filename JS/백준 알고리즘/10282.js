// 해킹
/* 
방향 그래프임, 양방향은 서로 의존해야 가능

이를 통해 갈수있는 그래프와 간선을 구해서, 다익스트라 알고리즘을 통해
가장 짧게 걸린 시간을 구해야함 = 다익스트라를 이용하자
*/

// 최소힙
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength = () => {
    return this.heap.length;
  };

  push = (node) => {
    this.heap.push(node);
    let i = this.heap.length - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[parentI] > this.heap[i]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  };

  pop = () => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const leftI = i * 2 + 1,
        rightI = i * 2 + 2;
      if (leftI >= this.heap.size) {
        break;
      }
      let nextI = i;
      if (this.heap[nextI] > this.heap[leftI]) {
        nextI = leftI;
      }
      if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
        nextI = rightI;
      }
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }
    return result;
  };

  swap = (a, b) => {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  };
}
// ------ 시작 ------
input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");

// ------ 변수 ------
testCase = input.shift();
// console.log(testCase);

// ------ 메서드 ------

function solutuion() {
  for (let i = 0; i < testCase; i++) {
    if (!input) return;
    [num, depend, startCom] = input.shift().split(" ").map(Number);
    // console.log(num, depend, startCom); // 시작 확인
    arr = input.splice(0, depend);
    // console.log(arr, input); // 배열 확인
    let network = Array.from(Array(num + 1), () => Array().fill([]));
    answer = 0;
    let doneTime = new Array(num + 1).fill(Infinity);
    // console.log(doneTime);
    // console.log(network); // 네트워크 확인
    for (j = 0; j < depend; j++) {
      [to, from, time] = arr[j].split(" ").map(Number);
      network[from].push([to, time]);
    }
    // console.log(network); // 네트워크 확인
    doneTime = dijkstra(network, startCom, doneTime);
    doneTime = doneTime.filter((v) => isFinite(v));
    console.log(doneTime.length, Math.max(...doneTime), i);
  }
}

function dijkstra(network, start, doneTime) {
  doneTime[start] = 0;
  heapq = new MinHeap();
  heapq.push([doneTime[start], start]);
  while (heapq.getLength()) {
    [currentTime, currentCom] = heapq.pop();

    if (doneTime[currentCom] < currentTime) {
      continue;
    }

    for ([adjacent, time] of network[currentCom]) {
      done = currentTime + time;
      if (done < doneTime[adjacent]) {
        doneTime[adjacent] = done;
        heapq.push([done, adjacent]);
      }
    }
  }
  return doneTime;
}

solutuion();

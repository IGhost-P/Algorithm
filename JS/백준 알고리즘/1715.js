// 카드 정렬하기
/*
10 20 30
10 + 20 => 30
30과 다음 최소 값
30 + 최소 값 + 다음 최솟값
이렇게 더하면 되는거 아님..? 
=> 소트로 하면 시간 초과 날듯 => 최소힙을 이용하자
10 20 10
*/

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}
let answer = 0;
const heapq = new MinHeap();

const solution = () => {
  [testCase, ...arr] = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  for (let i = 0; i < testCase; i++) {
    heapq.heappush(arr[i]);
  }
  while (heapq.size() > 1) {
    fri = heapq.heappop();
    sec = heapq.heappop();
    pushNum = fri + sec;
    answer += pushNum;
    heapq.heappush(pushNum);
    // console.log(fri, sec, heapq);
  }
};
solution();
console.log(answer);

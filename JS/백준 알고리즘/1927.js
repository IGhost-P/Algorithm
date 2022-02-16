class MinHeap {
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1; // 현재 들어간 값의 idx값
    let parIdx = (curIdx / 2) >> 0; // 오른쪽으로 0번 이동하면 소숫점을 없애준다

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      // 바꿨으니깐 idx도 바꿈
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2; // 왼쪽 자식의 index
    let rightIdx = curIdx * 2 + 1;

    // 왼쪽 자식이 없음 => 오른쪽 자식이 없음 => 걱정없이 뽑자
    if (!this.heap[leftIdx]) return min;
    // 오른쪽 자식이 없음 => 왼쪽 자식만 신경쓰면됨
    if (!this.heap[rightIdx]) {
      // 빠질 값이 더 크면 바꿔주자
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      // 더 작은 값이 pop후의 idx를 가져야함
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx); // 더 작은 값과 지금 비교중이 값을 바꿔줌
      // idx도 바꿔줌
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;

      // .. 이렇게 반복하다 보며느 left < cur < right가 될떄까지 반복한다
    }
    return min;
  }
}

let answer = [];
const solution = () => {
  [testCase, ...arr] = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const heapq = new MinHeap();
  for (let i = 0; i < testCase; i++) {
    el = arr[i];
    if (el == "0") {
      result = heapq.heappop() ?? 0;
      answer.push(result);
    } else {
      heapq.heappush(el);
    }
  }
};
solution();
console.log(answer.join("\n"));

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
class MinHeap extends Heap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  //bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }

  //add
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  //poll
  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}

class MaxHeap extends MinHeap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  //bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) > this.items[index] ||
        this.rightChild(index) > this.items[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }
}

class MedianHeap {
  constructor() {
    this.minheap = new MinHeap();
    this.maxheap = new MaxHeap();
  }
  add(value) {
    if (value > this.median()) {
      this.minheap.add(value);
    } else {
      this.maxheap.add(value);
    }

    if (this.minheap.size() - this.maxheap.size() > 1) {
      this.maxheap.add(this.minheap.poll());
    }
    if (this.maxheap.size() - this.minheap.size() > 1) {
      this.minheap.add(this.maxheap.poll());
    }
  }
  median() {
    if (this.minheap.size() === 0 && this.maxheap.size() === 0) {
      return Number.NEGATIVE_INFINITY;
    } else if (this.minheap.size() === this.maxheap.size()) {
      return Math.min(this.minheap.peek(), this.maxheap.peek());
    } else if (this.minheap.size() > this.maxheap.size()) {
      return this.minheap.peek();
    } else {
      return this.maxheap.peek();
    }
  }
}

const maxheap = new MaxHeap();
const minheap = new MinHeap();
const visit = new Array(100001).fill(false);
const answer = [];

const command = {
  recommend: (value) => {
    if (value == 1) {
      answer.push(maxheap.poll());
      while (maxheap.size() > 0 && visit[maxheap.peek()[1]] === false) {
        maxheap.poll();
      }
    } else {
      answer.push(minheap.poll());
      while (minheap.size() > 0 && visit[minheap.peek()[1]] === false) {
        minheap.poll();
      }
    }
  },
  add: (value, level) => {
    maxheap.add([Number(level), Number(value)]);
    visit[value] = true;
  },
  solved: (value) => {
    maxheap.items = maxheap.items.filter((v) => v[1] != value);
    minheap.items = minheap.items.filter((v) => v[1] != value);
  },
};

let n = 0;
let nCount = -1;
let m = 0;
let mCount = -1;

rl.on("line", function (line) {
  if (nCount === -1) {
    n = Number(line);
    nCount = n;
    return;
  }
  if (nCount === 0 && mCount === -1) {
    m = Number(line);
    mCount = m;
    return;
  }

  if (nCount > 0) {
    const [value, level] = line.split(" ");
    maxheap.add([Number(level), Number(value)]);
    minheap.add([Number(level), Number(value)]);
    visit[value] = true;
    nCount--;
    return;
  }
  if (mCount > 0) {
    const [com, value, level] = line.split(" ");
    command[com](value, level);
    mCount--;

    if (nCount === 0 && mCount === 0) {
      rl.close();
    }

    return;
  }
}).on("close", function () {
  console.log([...answer.map((v) => v[1])].join("\n"));
  process.exit();
});

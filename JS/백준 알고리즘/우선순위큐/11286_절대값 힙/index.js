const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const TOP = 1;
const parent = (i) => Math.floor(i / 2);
const left = (i) => i * 2;
const right = (i) => i * 2 + 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    // comparator for default: max heap
    this._heap = [null];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length - 1;
  }
  peak() {
    return this.size() > 0 ? this._heap[TOP] : null;
  }
  push(item) {
    this._heap.push(item);
    this._shiftUp();
  }
  pop() {
    const item = this._heap[TOP];

    this._swap(1, this._heap.length - 1);
    this._heap.pop();
    this._shiftDown();

    return item;
  }
  _greater(i, j) {
    // greater means: the former(i) has greater priority than the latter(j)
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }
  _shiftUp() {
    let node = this._heap.length - 1; // last item

    while (node > TOP && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _shiftDown() {
    let node = TOP;

    while (
      (left(node) < this._heap.length && this._greater(left(node), node)) ||
      (right(node) < this._heap.length && this._greater(right(node), node))
    ) {
      const greaterChild =
        right(node) < this._heap.length &&
        this._greater(right(node), left(node))
          ? right(node)
          : left(node);

      this._swap(node, greaterChild);
      node = greaterChild;
    }
  }
}

let n;
let count = -1;
let heap = new PriorityQueue((a, b) => {
  if (Math.abs(a) === Math.abs(b)) return a < b;
  return Math.abs(a) < Math.abs(b);
});

let input = [];

rl.on("line", function (line) {
  if (count === -1) {
    n = parseInt(line);
    count = n;
    return;
  }

  let inputValue = Number(String(BigInt(line)));
  if (inputValue === 0) {
    if (heap.size() === 0) {
      input.push(0);
    } else {
      let minVal = heap.pop();
      input.push(minVal);
    }
  } else {
    heap.push(inputValue);
  }

  count--;
  if (count === 0) {
    rl.close();
  }
}).on("close", function () {
  console.log(input.join("\n"));
  process.exit();
});

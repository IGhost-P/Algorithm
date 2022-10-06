// let [T, ...KTestCase] = require("fs")
//   .readFileSync(process.platform === "linux" ? "dev/stdin" : "index.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const testCase = [];
// for (let i = 0; i < T; i++) {
//   const K = KTestCase.shift();
//   testCase.push(KTestCase.splice(0, K));
// }

// const solution = (testCase) => {
//   const answer = [];

//   testCase.forEach((commands) => {
//     const queue = [];
//     commands.forEach((command) => {
//       const [type, num] = command.split(" ");

//       if (type === "I") {
//         queue.push(Number(num));
//         queue.sort((a, b) => a - b);
//       }

//       if (type === "D") {
//         if (Number(num) > 0) {
//           queue.pop();
//         } else {
//           queue.shift();
//         }
//       }
//     });

//     if (queue.length === 0) {
//       answer.push("EMPTY");
//     } else {
//       answer.push(`${queue[queue.length - 1]} ${queue[0]}`);
//     }
//   });

//   return answer.join("\n");
// };

// console.log(solution(testCase));

let [T, ...KTestCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "index.txt")
  .toString()
  .trim()
  .split("\n");

const testCase = [];
for (let i = 0; i < T; i++) {
  const K = KTestCase.shift();
  testCase.push(KTestCase.splice(0, K));
}

class Heap {
  constructor(comp) {
    this.items = [];
    this.comp = comp;
  }

  get size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  swap(a, b) {
    const temp = this.items[a];
    this.items[a] = this.items[b];
    this.items[b] = temp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  peak() {
    return this.items[0];
  }

  add(item) {
    let index = this.items.push(item) - 1;
    let parentIndex = this.getParentIndex(index);

    while (
      parentIndex >= 0 &&
      this.comp(this.items[index], this.items[parentIndex])
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  poll() {
    if (this.size < 2) return this.items.pop();

    const item = this.peak();
    this.items[0] = this.items.pop();

    let index = 0;
    let leftIndex = this.getLeftChildIndex(index);
    let rightIndex = this.getRightChildIndex(index);

    while (leftIndex < this.size) {
      const target =
        rightIndex < this.size &&
        this.comp(this.items[rightIndex], this.items[leftIndex])
          ? rightIndex
          : leftIndex;

      if (this.comp(this.items[index], this.items[target])) break;
      this.swap(index, target);

      index = target;
      leftIndex = this.getLeftChildIndex(index);
      rightIndex = this.getRightChildIndex(index);
    }

    return item;
  }
}

const solution = (testCase) => {
  const answer = [];

  testCase.forEach((commands) => {
    const minHeap = new Heap((a, b) => a < b);
    const maxHeap = new Heap((a, b) => a > b);

    commands.forEach((command) => {
      const [type, num] = command.split(" ");

      if (type === "I") {
        minHeap.add(Number(num));
        maxHeap.add(Number(num));
      }

      if (type === "D" && minHeap.size > 0 && maxHeap.size > 0) {
        if (Number(num) > 0) {
          maxHeap.poll();
        } else {
          minHeap.poll();
        }
      }
    });

    if (minHeap.size === 0) {
      answer.push("EMPTY");
    } else {
      answer.push(`${maxHeap.peak()} ${minHeap.peak()}`);
    }
  });

  return answer.join("\n");
};

console.log(solution(testCase));

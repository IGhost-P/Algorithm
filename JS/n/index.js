// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//  * Complete the 'minNum' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER samDaily
//  *  2. INTEGER kellyDaily
//  *  3. INTEGER difference
//  */

// function minNum(samDaily, kellyDaily, difference) {
//   // Write your code here\

//   // 1. 차이만큼 sam의 값을 초기화 해준다
//   let sam = Number(difference);

//   // 2. kelly를 0으로 초기화 해준다(그래야 sam과 kelly의 차이가 difference가 된다)
//   let kelly = 0;

//   // 3. 구해야할 day
//   let day = 1;

//   // 4. 만약 sam이 항상 kelly보다 많이 푼다면 영원히 sam이 더 많이 풀 것이다
//   if (samDaily >= kellyDaily) {
//     return -1;
//   }

//   // 5. sam이 kelly보다 작을때까지 반복한다 (즉, kelly가 더 많이 풀때까지 반복한다)
//   while (sam >= kelly) {
//     sam += samDaily;
//     kelly += kellyDaily;

//     if (sam < kelly) {
//       return day;
//     }

//     day++;
//   }
// }

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const samDaily = parseInt(readLine().trim(), 10);

//   const kellyDaily = parseInt(readLine().trim(), 10);

//   const difference = parseInt(readLine().trim(), 10);

//   const result = minNum(samDaily, kellyDaily, difference);

//   ws.write(result + "\n");

//   ws.end();
// }

// console.log(minNum(3, 5, 1));

// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//  * Complete the 'getMaximumRemovals' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY order
//  *  2. STRING source
//  *  3. STRING target
//  */

// function getMaximumRemovals(order, source, target) {
//   // Write your code here
//   let orderLen = order.length;
//   let targetIndex = new Set();
//   [...source].forEach((s, i) => {
//     [...target].forEach((t, j) => {
//       if (s === t) {
//         targetIndex.add(i + 1);
//       }
//     });
//   });

//   targetIndex = Array.from(targetIndex);

//   for (let i = 0; i < orderLen; i++) {
//     if (targetIndex.includes(order[i])) {
//       targetIndex.splice(targetIndex.indexOf(order[i]), 1);

//       if (targetIndex.length < target.length) {
//         return i;
//       }
//     }
//   }
// }

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const orderCount = parseInt(readLine().trim(), 10);

//   let order = [];

//   for (let i = 0; i < orderCount; i++) {
//     const orderItem = parseInt(readLine().trim(), 10);
//     order.push(orderItem);
//   }

//   const source = readLine();

//   const target = readLine();

//   const result = getMaximumRemovals(order, source, target);

//   ws.write(result + "\n");

//   ws.end();
// }

// console.log(getMaximumRemovals([7, 1, 2, 5, 4, 3, 6], "abbabaa", "bb"));

// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//  * Complete the 'getMinimumHealth' function below.
//  *
//  * The function is expected to return a LONG_INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY initial_players
//  *  2. INTEGER_ARRAY new_players
//  *  3. INTEGER rank
//  */

// class Heap {
//   constructor() {
//     this.items = [];
//   }
//   swap(index1, index2) {
//     let temp = this.items[index1];
//     this.items[index1] = this.items[index2];
//     this.items[index2] = temp;
//   }
//   parentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }
//   leftChildIndex(index) {
//     return index * 2 + 1;
//   }
//   rightChildIndex(index) {
//     return index * 2 + 2;
//   }
//   parent(index) {
//     return this.items[this.parentIndex(index)];
//   }
//   leftChild(index) {
//     return this.items[this.leftChildIndex(index)];
//   }
//   rightChild(index) {
//     return this.items[this.rightChildIndex(index)];
//   }
//   peek() {
//     return this.items[0];
//   }
//   size() {
//     return this.items.length;
//   }
// }
// class MinHeap extends Heap {
//   //bubbleUp
//   bubbleUp() {
//     let index = this.items.length - 1;
//     while (
//       this.parent(index) !== undefined &&
//       this.parent(index) > this.items[index]
//     ) {
//       this.swap(index, this.parentIndex(index));
//       index = this.parentIndex(index);
//     }
//   }
//   //bubbleDown
//   bubbleDown() {
//     let index = 0;
//     while (
//       this.leftChild(index) !== undefined &&
//       (this.leftChild(index) < this.items[index] ||
//         this.rightChild(index) < this.items[index])
//     ) {
//       let smallerIndex = this.leftChildIndex(index);
//       if (
//         this.rightChild(index) !== undefined &&
//         this.rightChild(index) < this.items[smallerIndex]
//       ) {
//         smallerIndex = this.rightChildIndex(index);
//       }
//       this.swap(index, smallerIndex);
//       index = smallerIndex;
//     }
//   }

//   //add
//   add(item) {
//     this.items[this.items.length] = item;
//     this.bubbleUp();
//   }

//   //poll
//   poll() {
//     let item = this.items[0];
//     this.items[0] = this.items[this.items.length - 1];
//     this.items.pop();
//     this.bubbleDown();
//     return item;
//   }
// }

// class MaxHeap extends MinHeap {
//   //bubbleUp
//   bubbleUp() {
//     let index = this.items.length - 1;
//     while (
//       this.parent(index) !== undefined &&
//       this.parent(index) < this.items[index]
//     ) {
//       this.swap(index, this.parentIndex(index));
//       index = this.parentIndex(index);
//     }
//   }
//   //bubbleDown
//   bubbleDown() {
//     let index = 0;
//     while (
//       this.leftChild(index) !== undefined &&
//       (this.leftChild(index) > this.items[index] ||
//         this.rightChild(index) > this.items[index])
//     ) {
//       let largerIndex = this.leftChildIndex(index);
//       if (
//         this.rightChild(index) !== undefined &&
//         this.rightChild(index) > this.items[largerIndex]
//       ) {
//         largerIndex = this.rightChildIndex(index);
//       }
//       this.swap(index, largerIndex);
//       index = largerIndex;
//     }
//   }
// }

// class MedianHeap {
//   constructor() {
//     this.minheap = new MinHeap();
//     this.maxheap = new MaxHeap();
//   }
//   add(value) {
//     if (value > this.median()) {
//       this.minheap.add(value);
//     } else {
//       this.maxheap.add(value);
//     }

//     if (this.minheap.size() - this.maxheap.size() > 1) {
//       this.maxheap.add(this.minheap.poll());
//     }
//     if (this.maxheap.size() - this.minheap.size() > 1) {
//       this.minheap.add(this.maxheap.poll());
//     }
//   }
//   median() {
//     if (this.minheap.size() === 0 && this.maxheap.size() === 0) {
//       return Number.NEGATIVE_INFINITY;
//     } else if (this.minheap.size() === this.maxheap.size()) {
//       return Math.min(this.minheap.peek(), this.maxheap.peek());
//     } else if (this.minheap.size() > this.maxheap.size()) {
//       return this.minheap.peek();
//     } else {
//       return this.maxheap.peek();
//     }
//   }
// }
// function getMinimumHealth(initial_players, new_players, rank) {
//   // Write your code here

//   // 1. 필요한 힘을 초기화 한다
//   let strength = 0;

//   // 2. 우선순위큐를 사용하기 위해 MinHeap을 생성한다
//   let minHeap = new MinHeap();

//   // 3. ranke보다 size가 커지면 poll을 해준다(작은값을 빼줌)
//   for (let i = 0; i < initial_players.length; i++) {
//     minHeap.add(initial_players[i]);
//     if (minHeap.size() > rank) {
//       minHeap.poll();
//     }
//   }

//   // 4. 그후 현재 initial_players의 root값을 strength에 더해준다(그렇게되면 해당 랭크의 플레이어의 strength가 추가 된다)
//   strength += minHeap.peek();

//   // 5. new_players가 들어올때도 똑같이 rank보다 크면 poll을 해준다, 단 이번에는 한명씩 추가가 되니 바로바로 strength에 더해준다
//   for (let i = 0; i < new_players.length; i++) {
//     minHeap.add(new_players[i]);
//     if (minHeap.size() > rank) {
//       minHeap.poll();
//       strength += minHeap.peek();
//     }
//   }
//   return strength;
// }

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const initial_playersCount = parseInt(readLine().trim(), 10);

//   let initial_players = [];

//   for (let i = 0; i < initial_playersCount; i++) {
//     const initial_playersItem = parseInt(readLine().trim(), 10);
//     initial_players.push(initial_playersItem);
//   }

//   const new_playersCount = parseInt(readLine().trim(), 10);

//   let new_players = [];

//   for (let i = 0; i < new_playersCount; i++) {
//     const new_playersItem = parseInt(readLine().trim(), 10);
//     new_players.push(new_playersItem);
//   }

//   const rank = parseInt(readLine().trim(), 10);

//   const result = getMinimumHealth(initial_players, new_players, rank);

//   ws.write(result + "\n");

//   ws.end();
// }

// console.log(getMinimumHealth([1, 2, 3], [6, 5, 4], 1));

// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//  * Complete the 'minCostPath' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. WEIGHTED_INTEGER_GRAPH g
//  *  2. INTEGER x
//  *  3. INTEGER y
//  */

// /*
//  * For the weighted graph, <name>:
//  *
//  * 1. The number of nodes is <name>Nodes.
//  * 2. The number of edges is <name>Edges.
//  * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
//  *
//  */

// /**
//  *
//  */
// function minCostPath(gNodes, gFrom, gTo, gWeight, x, y) {}

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const gNodesEdges = readLine().split(" ");

//   const gNodes = parseInt(gNodesEdges[0], 10);
//   const gEdges = parseInt(gNodesEdges[1], 10);

//   let gFrom = [];
//   let gTo = [];
//   let gWeight = [];

//   for (let i = 0; i < gEdges; i++) {
//     const gFromToWeight = readLine().split(" ");

//     gFrom.push(parseInt(gFromToWeight[0], 10));
//     gTo.push(parseInt(gFromToWeight[1], 10));
//     gWeight.push(parseInt(gFromToWeight[2], 10));
//   }

//   const x = parseInt(readLine().trim(), 10);

//   const y = parseInt(readLine().trim(), 10);

//   const result = minCostPath(gNodes, gFrom, gTo, gWeight, x, y);

//   ws.write(result + "\n");

//   ws.end();
// }

// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//  * Complete the 'getPhoneNumbers' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts following parameters:
//  *  1. STRING country
//  *  2. STRING phoneNumber
//  * API URL: https://jsonmock.hackerrank.com/api/countries?name=<country>
//  */
// const axios = require("axios");

// function myFetch(url) {
//   return new Promise((resolve, reject) => {
//     request(url, function (error, response, body) {
//       if (error) reject(error);
//       else resolve(body);
//     });
//   });
// }

// // 통신을 위해 axios를 사용한다
// const axios = require("axios");

// async function getPhoneNumbers(country, phoneNumber) {
//   try {
//     // 1. country를 받아서 해당 country의 정보를 가져온다
//     const url = `https://jsonmock.hackerrank.com/api/countries?name=${country}`;
//     const { data } = await axios.get(url);

//     // 2. 해당 country의 data를 가져온다
//     const { data: countryData } = data;

//     // 3. 해당 country의 callingCodes를 가져온다
//     const { callingCodes } = countryData[0];

//     // 4. callingCodes가 여러개일 경우 가장 높은 숫자를 가져온다
//     const formattedCountryCode = `+${callingCodes.sort((a, b) => b - a)[0]}`;

//     // 5. callingCodes를 phoneNumber에 붙여서 리턴한다
//     return `${formattedCountryCode} ${phoneNumber}`;
//   } catch (err) {
//     // 6. 에러가 발생하면 -1을 리턴한다
//     return -1;
//   }
// }

// async function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const country = readLine();

//   const phoneNumber = readLine();

//   const result = await getPhoneNumbers(country, phoneNumber);

//   ws.write(result + "\n");

//   ws.end();
// }

// console.log(getPhoneNumbers("India", "91-011-23413627"));
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'minCostPath' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. WEIGHTED_INTEGER_GRAPH g
 *  2. INTEGER x
 *  3. INTEGER y
 */

/*
 * For the weighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
 *
 */

//start -> x -> y -> end shortest path

class Node {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

const dijkstra = (graph, start) => {
  const distances = {};
  const previous = {};
  const pq = new PriorityQueue();

  for (let key in graph) {
    if (key === start) {
      distances[key] = 0;
      pq.enqueue(key, 0);
    } else {
      distances[key] = Infinity;
      pq.enqueue(key, Infinity);
    }
    previous[key] = null;
  }

  while (!pq.isEmpty()) {
    const current = pq.dequeue().value;
    if (current === null) continue;
    for (let neighbor of graph[current]) {
      const distance = distances[current] + neighbor.weight;
      if (distance < distances[neighbor.value]) {
        distances[neighbor.value] = distance;
        previous[neighbor.value] = current;
        pq.enqueue(neighbor.value, distance);
      }
    }
  }

  return { distances, previous };
};

function minCostPath(gNodes, gFrom, gTo, gWeight, x, y) {
  // Write your code here
  const graph = {};
  for (let i = 0; i < gFrom.length; i++) {
    const from = gFrom[i];
    const to = gTo[i];
    const weight = gWeight[i];
    if (graph[from]) {
      graph[from].push(new Node(to, weight));
    } else {
      graph[from] = [new Node(to, weight)];
    }
    if (graph[to]) {
      graph[to].push(new Node(from, weight));
    } else {
      graph[to] = [new Node(from, weight)];
    }
  }
  const { distances, previous } = dijkstra(graph, 1);
  console.log(distances, previous);
  return distances[x] + distances[y];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gNodesEdges = readLine().split(" ");

  const gNodes = parseInt(gNodesEdges[0], 10);
  const gEdges = parseInt(gNodesEdges[1], 10);

  let gFrom = [];
  let gTo = [];
  let gWeight = [];

  for (let i = 0; i < gEdges; i++) {
    const gFromToWeight = readLine().split(" ");

    gFrom.push(parseInt(gFromToWeight[0], 10));
    gTo.push(parseInt(gFromToWeight[1], 10));
    gWeight.push(parseInt(gFromToWeight[2], 10));
  }

  const x = parseInt(readLine().trim(), 10);

  const y = parseInt(readLine().trim(), 10);

  const result = minCostPath(gNodes, gFrom, gTo, gWeight, x, y);

  ws.write(result + "\n");

  ws.end();
}

console.log(
  minCostPath(4, [1, 1, 2, 2, 3], [2, 4, 4, 3, 4], [6, 9, 10, 6, 11], 2, 3)
);

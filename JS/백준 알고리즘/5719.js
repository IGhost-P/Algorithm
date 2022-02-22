// 거의 최단 경로
/*
최단 경로에 포함되어 있지 않은 경로로 최단 경로
=> 최단 경로가 된 애들을 빼고 다시 돌리면 될것 같습니다
1번째줄 = [장소수, 도로수]
2번째 줄 = [시작점, 출발점]
3번째 줄부터는 계속
... 다음 .length가 2번째 이면 다시 시작
*/
// 그래프

function setGraph(arr) {
  const g = new Map();
  const reverseG = new Map();

  arr.forEach((a) => {
    const [x, y, dist] = a.split(" ").map((b) => +b);

    if (!g.get(x)) {
      g.set(x, []);
    }

    if (!reverseG.get(y)) {
      reverseG.set(y, []);
    }

    g.get(x).push([dist, y]);
    reverseG.get(y).push([dist, x]);
  });

  return { g, reverseG };
}
// ------ 시작 ------

input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
len = input.length;

function solutuion(input) {
  while (input.length > 0) {
    // 첫번째줄
    [node, road] = input.shift().split(" ").map(Number);
    // console.log(node, road); // 첫번째줄 확인용

    // Guard clause
    if (node == 0 && road == 0) return;

    // 두번째줄
    [start, end] = input.shift().split(" ").map(Number);
    // console.log(start, end); //두번째 줄 확인용

    // testCase별 나누기
    newinput = input.splice(0, road);

    // testCase별 순회

    // 네트워크 만들기
    const { g, reverseG } = setGraph(newinput);
    network = g;
    reverseNetwork = reverseG;

    // 도로 만들기
    let distances = new Array(node + 1).fill(Infinity);
    let dropped = Array.from({ length: node + 1 }, () =>
      new Array(node + 1).fill(false)
    );

    dijkstra(network, start, distances, dropped);
    bfs(start, end, distances, dropped, reverseNetwork);

    // 최단거리를 지운 새로운 도로
    distances = new Array(node + 1).fill(Infinity);
    dijkstra(network, start, distances, dropped);

    const result = distances[end] === Infinity ? -1 : distances[end];
    console.log(result);
  }
}

function dijkstra(network, start, distances, dropped) {
  heapq = [];
  distances[start] = 0;
  heapq.push([distances[start], start]);
  while (heapq.length > 0) {
    [dist, currentNode] = heapq.shift();

    if (distances[currentNode] < dist) {
      continue;
    }

    // for ([adjacent, d] of network[currentNode]) {
    //   distance = dist + d;
    //   if (distance < distances[adjacent] && !dropped[currentNode][adjacent]) {
    //     distances[adjacent] = distance;
    //     heapq.push([distance, adjacent]);
    //     heapq.sort((a, b) => a[0] - b[0]);
    //   }
    // }
    if (!!network.get(currentNode)) {
      network.get(currentNode).forEach((el) => {
        const cost = dist + el[0];
        if (distances[el[1]] > cost && !dropped[currentNode][el[1]]) {
          distances[el[1]] = cost;
          heapq.push([cost, el[1]]);
          heapq.sort((a, b) => a[0] - b[0]);
        }
      });
    }
  }
  return distances;
}

function bfs(start, end, distances, dropped, reverseNetwork) {
  const q = [end];
  const visited = [];
  while (q.length > 0) {
    currentNode = q.shift();
    if (currentNode == start) continue;
    // for ([prev, d] of reverseNetwork[currentNode]) {
    //   if (distances[currentNode] == distances[prev] + d) {
    //     dropped[prev][currentNode] = true;
    //     q.push(prev);
    //   }
    // }
    if (!!reverseNetwork.get(currentNode) && !visited.includes(currentNode)) {
      visited.push(currentNode);
      reverseNetwork.get(currentNode).forEach((a) => {
        const [dist, prev] = a;
        const cost = distances[prev] + dist;
        if (distances[currentNode] === cost) {
          dropped[prev][currentNode] = true;
          q.push(prev);
        }
      });
    }
  }
}

solutuion(input);
// const fs = require("fs");
// const input = fs.readFileSync("예제.txt").toString().split("\n");

// let graph = null;
// let reGraph = null;
// let dists = null;
// let dropped = null;

// function setGraph(arr) {
//   const g = new Map();
//   const reverseG = new Map();

//   arr.forEach((a) => {
//     const [x, y, dist] = a.split(" ").map((b) => +b);

//     if (!g.get(x)) {
//       g.set(x, []);
//     }

//     if (!reverseG.get(y)) {
//       reverseG.set(y, []);
//     }

//     g.get(x).push([dist, y]);
//     reverseG.get(y).push([dist, x]);
//   });

//   return { g, reverseG };
// }

// function dijkstra(start) {
//   const queue = [];
//   queue.push([0, start]);
//   dists[start] = 0;

//   while (queue.length > 0) {
//     const [dist, node] = queue.shift();
//     if (dists[node] < dist) continue;

//     if (!!graph.get(node)) {
//       graph.get(node).forEach((a) => {
//         const cost = dist + a[0];

//         if (dists[a[1]] > cost && !dropped[node][a[1]]) {
//           dists[a[1]] = cost;
//           queue.push([cost, a[1]]);
//           queue.sort((a, b) => a[0] - b[0]);
//         }
//       });
//     }
//   }
// }

// function bfs(start, end) {
//   const queue = [end];
//   const visited = [];

//   while (queue.length > 0) {
//     const node = queue.shift();
//     if (node === start) continue;

//     if (!!reGraph.get(node) && !visited.includes(node)) {
//       visited.push(node);
//       reGraph.get(node).forEach((a) => {
//         const [dist, prev] = a;
//         const cost = dists[prev] + dist;
//         if (dists[node] === cost) {
//           dropped[prev][node] = true;
//           queue.push(prev);
//         }
//       });
//     }
//   }
// }

// function solution(input) {
//   while (input.length > 0) {
//     let [N, M] = input
//       .shift()
//       .split(" ")
//       .map((a) => +a);

//     if (N === 0 && M === 0) break;

//     let [S, E] = input
//       .shift()
//       .split(" ")
//       .map((a) => +a);

//     let params = input.splice(0, M);

//     const { g, reverseG } = setGraph(params);
//     graph = g;
//     reGraph = reverseG;
//     dists = Array(N + 1).fill(Infinity);
//     dropped = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(false));

//     dijkstra(S);
//     bfs(S, E);

//     dists = Array(N + 1).fill(Infinity);
//     dijkstra(S);
//     console.log(dists, dropped);
//     const result = dists[E] === Infinity ? -1 : dists[E];
//     // console.log(result);
//   }
// }

// solution(input);

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

// Map을 이용해서 넣음
function setGraph(arr) {
  const g = new Map();
  const reverseG = new Map();

  arr.forEach((a) => {
    const [x, y, dist] = a.split(" ").map((b) => +b);

    // x를 조회했을대 키값에 없다면?
    if (!g.get(x)) {
      g.set(x, []); // 넣어줌
    }

    // y를 조회했는데 키값에 없다면?
    if (!reverseG.get(y)) {
      reverseG.set(y, []);
    }

    // 조회한 키값에 [가중치 , to]를 설정
    g.get(x).push([dist, y]);
    reverseG.get(y).push([dist, x]);
  });

  return { g, reverseG };
}
// ------ 시작 ------

input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
len = input.length;

function solutuion(input) {
  // 슬라이싱을 할것이기 때문에 input이 더이상 없다면 필요없다
  while (input.length > 0) {
    // 첫번째줄
    [node, road] = input.shift().split(" ").map(Number);
    // console.log(node, road); // 첫번째줄 확인용

    // Guard clause = 종료 조건
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

    // 도로 만들기 : 숫자가 키이고, 인덱스로 들어갈것이기 때문에, +1을 해줌
    let distances = new Array(node + 1).fill(Infinity);
    let dropped = Array.from({ length: node + 1 }, () =>
      new Array(node + 1).fill(false)
    );

    dijkstra(network, start, distances, dropped);
    bfs(start, end, distances, dropped, reverseNetwork);

    // 다시 최단거리 && 이전 최단거리에 의해 블록된 위치 = 최단거리가 아닌 최단거리
    distances = new Array(node + 1).fill(Infinity);
    dijkstra(network, start, distances, dropped);

    const result = distances[end] === Infinity ? -1 : distances[end];
    console.log(result);
  }
}

function dijkstra(network, start, distances, dropped) {
  heapq = []; // heapq를 사용하지 않고 마지막에 넣어줄때 정렬을 해주자
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
      // currentNide의 키에 있는 value들
      // [undefind, null, 0일 경우 false]
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
      // 방문하지 않았다면
      visited.push(currentNode);
      reverseNetwork.get(currentNode).forEach((a) => {
        const [dist, prev] = a;
        const cost = distances[prev] + dist; // 다음번으로가는 값이 최단거리 값과 같다면 (즉 a(2)->(3)->c:5 , a(2)->-(4)->c:6 라 할대, c->(3)->a(2) : 5가 되는경우를 찾으면 되는것 )
        if (distances[currentNode] === cost) {
          dropped[prev][currentNode] = true; // 해당하는 위치는 true로
          q.push(prev); // q는 계속된다..
        }
      });
    }
  }
}

solutuion(input);

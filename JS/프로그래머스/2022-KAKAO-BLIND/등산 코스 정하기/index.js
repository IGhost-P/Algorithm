const setMap = (n, paths, summits) => {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(i + 1, []);
  }
  paths.forEach((path) => {
    const [from, to, cost] = path;
    map.get(from).push([to, cost]);
    map.get(to).push([from, cost]);
  });

  for (let i = 0; i < summits.length; i++) {
    map.set(summits[i], []);
  }

  return map;
};

const bfs = (map, start, end) => {
  const queue = [[start, 0]];
  const visited = new Set();
  let max = 0;
  while (queue.length) {
    const [node, cost] = queue.shift();
    if (node === end) {
      max = Math.max(max, cost);
    }
    if (visited.has(node)) continue;
    visited.add(node);
    map.get(node).forEach(([next, nextCost]) => {
      queue.push([next, nextCost]);
    });
  }

  return max;
};

function solution(n, paths, gates, summits) {
  var answer = [];
  const map = setMap(n, paths, summits);
  let min = Infinity;
  console.log(map);
  for (let i = 0; i < gates.length; i++) {
    for (let j = 0; j < summits.length; j++) {
      startToEnd = bfs(map, gates[i], summits[j]);
      endToStart = bfs(map, summits[j], gates[i]);
      console.log(startToEnd, endToStart);
      let cost = Math.min(startToEnd, endToStart);
      if (cost < min) {
        min = cost;
        answer = [summits[j], min];
      }
    }
  }

  return answer;
}

console.log(
  solution(
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5]
  )
); // [5,3]

// Language: javascript
// Path: JS/프로그래머스/2022-KAKAO-BLIND/등산 코스 정하기/index.js

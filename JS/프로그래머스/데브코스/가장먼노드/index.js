// 다익스트라를 이용해보자
function solution(n, edge) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let visited = Array(n + 1).fill(false);
  let distance = Array(n + 1).fill(0);
  for (let i = 0; i < edge.length; i++) {
    let [a, b] = edge[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  let queue = [];
  queue.push(1);
  visited[1] = true;
  while (queue.length !== 0) {
    let now = queue.shift();
    for (let i = 0; i < graph[now].length; i++) {
      let next = graph[now][i];
      if (!visited[next]) {
        visited[next] = true;
        distance[next] = distance[now] + 1;
        queue.push(next);
      }
    }
  }

  let max = Math.max(...distance);
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] === max) answer++;
  }

  return answer;
}

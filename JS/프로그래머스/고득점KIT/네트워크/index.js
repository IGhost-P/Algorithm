const setGraph = (n, computers) => {
  const graph = new Map();
  computers.forEach((computer, index) => {
    computer.forEach((isConnected, i) => {
      if (isConnected === 1) {
        if (graph.has(index)) {
          graph.set(index, [...graph.get(index), i]);
        } else {
          graph.set(index, [i]);
        }
      }
    });
  });
  return graph;
};

function solution(n, computers) {
  var answer = 0;
  const graph = setGraph(n, computers);
  while (graph.size > 0) {
    const start = graph.keys().next().value;
    const stack = [start];
    while (stack.length > 0) {
      const node = stack.pop();
      if (graph.has(node)) {
        stack.push(...graph.get(node));
        graph.delete(node);
      }
    }
    answer++;
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

// comiit 지우기 1

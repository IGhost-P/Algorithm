const setGraph = (tickets) => {
  let ticketsLen = tickets.length;
  let graph = new Map();
  for (let i = 0; i < ticketsLen; i++) {
    const [from, to] = tickets[i];
    if (graph.has(from)) {
      graph.set(from, [...graph.get(from), to].sort().reverse());
    } else {
      graph.set(from, [to]);
    }
  }
  return graph;
};

const dfs = (graph, start) => {
  let stack = [start];
  let answer = [];
  while (stack.length > 0) {
    const next = stack[stack.length - 1];
    const nextNode = graph.get(next);
    if (nextNode && nextNode.length > 0) {
      stack.push(graph.get(next).pop());
    } else {
      answer.push(stack.pop());
    }
  }
  return answer.reverse();
};

function solution(tickets) {
  var answer = [];
  const graph = setGraph(tickets);
  answer = dfs(graph, "ICN");
  return answer;
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);

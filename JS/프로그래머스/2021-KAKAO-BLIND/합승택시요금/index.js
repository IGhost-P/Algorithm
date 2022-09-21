const setMap = (n, fares) => {
  const map = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) {
    map[i][i] = 0;
  }
  fares.forEach((el) => {
    const [a, b, c] = el;
    map[a][b] = c;
    map[b][a] = c;
  });
  return map;
};

function solution(n, s, a, b, fares) {
  var answer = 0;
  const map = setMap(n, fares);
  console.log(map);
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
      }
    }
  }
  answer = map[s][a] + map[s][b];
  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, map[s][i] + map[i][a] + map[i][b]);
  }
  return answer;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
);

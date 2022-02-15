/* 
갈수 있는 부분 => BFS탐색
BFS 돌면서 중량에 안맞으면 탈락
*/

const BFS = (n, city, start, end, mid) => {
  let visited = new Array(n + 1).fill(false);
  let need_vist = [];
  need_vist.push(start);
  while (need_vist.length != 0) {
    // 가장 처음 상태
    let cur = need_vist.shift();
    visited[cur] = true;
    if (cur == end) {
      return true;
    }

    for (let i = 0; i < city[cur].length; i++) {
      let next = city[cur][i][0]; // to
      let nextWegith = city[cur][i][1]; // wegith
      if (!visited[next] && mid <= nextWegith) {
        19;
        visited[next] = true;
        need_vist.push(next);
      }
    }
  }
  // 못하면 못가는 곳
  return false;
};

const binarySearch = (n, city, start, end, max) => {
  let left = 1;
  let right = max;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (BFS(n, city, start, end, mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(right);
};

function solution() {
  input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);

  let city = new Array(n + 1).fill(null).map((_) => []);
  let max = 0;

  // 그래프 dict 만들기
  for (let i = 1; i <= m; i++) {
    let [from, to, weigth] = input[i].split(" ").map(Number);

    if (weigth > max) max = weigth;
    city[from].push([to, weigth]);
    city[to].push([from, weigth]);
  }

  let [start, end] = input[m + 1].split(" ").map(Number);

  binarySearch(n, city, start, end, max); // binarySearch(n, city, start, end, max)
}
solution();

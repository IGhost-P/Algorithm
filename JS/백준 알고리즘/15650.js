// 15650 : N과 M(2)
/*
중복없이 고른 M개
고른 수열은 오름차순이야한다 => 고르면서  dfs 조건에 전 값보다 커야 한다를 넣음

 */

[n, m] = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split(" ");
const result = new Array(m).fill(0);
const checked = new Array(n).fill(false);

const dfs = (level) => {
  if (level == m) {
    return console.log(...result);
  }
  for (let i = 0; i < n; i++) {
    if (checked[i]) continue;
    if (result[level - 1] > i) continue;
    result[level] = i + 1;
    checked[i] = true;
    dfs(level + 1);
    checked[i] = false;
  }
};
dfs(0);

// 15649 : N과 M(1)
/* 
1부터 N까지 자연수 중에서 중복없이 M개를 고른 수열

sudo code:
1. N, M을 입력 받는다
2. 중복없이 M개를 골랐다 => 그리고 줄 세우기 수열
3. nPm을 계산하면 되는것
*/
[n, m] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split(" ");

result = new Array(m).fill(0);
arr = new Array(n).fill(false);
const dfsCombination = (level) => {
  if (level == m) {
    return console.log(...result);
  }

  for (let i = 1; i <= n; i++) {
    if (arr[i]) continue;
    result[level] = i;
    arr[i] = true;
    dfsCombination(level + 1);
    arr[i] = false;
  }
};

dfsCombination(0, 1);

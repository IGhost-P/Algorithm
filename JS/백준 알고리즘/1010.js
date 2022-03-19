// 1010 : 다리 놓기
/*

1-1, 1-2, 1-3, 1-4 ... 하지만 다리가 서로 꼬이면 안된다 = 조합
왜>
1-1 1-2이라 할때 2-1은 == 1-2 라는 조합 logic을 생각하면 된다
반대편 다리 개수가 m개 라면 그중 n개를 뽑는것 (그림을 보면 7개중 4개를 뽑는것을 볼수 있다)

mCn 을 구하면된다
*/
// [testCase, ...arr] = require("fs")
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
//   .toString()
//   .trim()
//   .split("\n");

// arr.map((el) => {
//   const [n, m] = el.split(" ").map(Number);
//   const result = new Array(n).fill(0);
//   let cnt = 0;
//   const dfs = (level, num) => {
//     if (level === n) {
//       return cnt++;
//     }

//     for (let i = num; i <= m; i++) {
//       dfs(level + 1, i + 1);
//     }
//   };
//   dfs(0, 1);
//   console.log(cnt);
// });

const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

arr
  .map((v) => v.split(" ").map((x) => +x))
  .forEach((y) => {
    bridge(y[0], y[1]);
  });

function bridge(k, n) {
  let dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

  dp[0][0] = 1;
  dp[1][0] = 1;
  dp[1][1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        dp[i][j] = 1;
      } else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  console.log(dp[n][k]);
}

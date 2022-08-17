// 2217 : 로프
/**
 * 최소값 * N 아닌가 => 아니네
 * 5, 10 , 15 가 있으면
 * 15 보단 , 10 + 15 /2 가 더 많이 듬
 *
 */

[N, ...ropes] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
ropes = ropes.map(Number);

const solution = (N, ropes) => {
  ropes.sort((a, b) => b - a);
  let max = -Infinity;
  let ropesSum = 0;
  for (let i = 0; i < ropes.length; i++) {
    if (max <= ropes[i] * (i + 1)) {
      max = ropes[i] * (i + 1);
      ropesSum += ropes[i];
    }
  }

  return Math.floor(max);
};

console.log(solution(N, ropes));

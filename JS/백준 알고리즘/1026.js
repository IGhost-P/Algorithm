// 1026 : 보물
/**
 * B배열을 가장 큰 순으로 정렬하고
 * A배열을 가장 작은 순으로 정렬하고  계산하면 된다
 */

[N, ...AB] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

A = AB[0].split(" ").map((el) => parseInt(el));
B = AB[1].split(" ").map((el) => parseInt(el));

A = A.sort((a, b) => a - b);
B = B.sort((a, b) => b - a);
let answer = 0;
for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}

console.log(answer);

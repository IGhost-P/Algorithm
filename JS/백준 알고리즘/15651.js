// 15651 : N과 M(3)
/**
 * 같은 수를 여러번 골라도 되는 수열 = 중복 수열
 */

[N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

result = [];
answer = [];
const dfs = (count) => {
  if (count == M) {
    return answer.push(result.join(" "));
  }

  for (let i = 1; i <= N; i++) {
    result.push(i);
    dfs(count + 1);
    result.pop();
  }
};

dfs(0);
console.log(answer.join("\n"));

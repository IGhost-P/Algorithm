// 15652 : N과 M(4)
/**
 * 중복 수열이지만, 비내림 차순이여야함 => 중간에 가위치기를 해야한다
 */

[N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

result = [];
answer = [];
const dfs = (count, begin) => {
  if (count == M) {
    return answer.push(result.join(" "));
  }

  for (let i = begin; i <= N; i++) {
    result.push(i);
    dfs(count + 1, i);
    result.pop();
  }
};

dfs(0, 1);
console.log(answer.join("\n"));

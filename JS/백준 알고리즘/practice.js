[N, ...testCase] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, arr) => {
  let answer = [];
  for (let i = 0; i < N; i++) {
    answer.push(
      arr[i].split("X").reduce((acc, cur) => {
        const len = cur.length;
        return acc + (len * (len + 1)) / 2;
      }, 0)
    );
  }

  return answer.join("\n");
};

console.log(solution(N, arr));

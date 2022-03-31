// 14889 : 스타트와 링크
/**
 * 브루투포스를 진행하면서, 차이를 찾아가는데,
 * 언제 백트레킹을 넣어야할까?
 *
 * 1. 최소값이 0이 되면 끝
 * 2. 모두 돌았을때 최소값이 가장 작아야함
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
N = Number(N);
arr = arr.map((el) => el.split(" ").map(Number));
const resultArr = [];

const numArr = Array.from(Array(N), (_, idx) => {
  return idx;
});

const r = N / 2;
const result = new Array(N / 2).fill(0);
const answer = [];
const dfs = (level, index) => {
  if (level == r) {
    return answer.push([
      [...result],
      numArr.filter((el) => {
        return !result.includes(el);
      }),
    ]);
  }
  for (let i = index; i < N; i++) {
    result[level] = i;
    dfs(level + 1, i + 1);
  }
};

dfs(0, 0);
// console.log(answer);
const solution = () => {
  answer.forEach((el) => {
    const [A, B] = el;

    const Aanswer = A.map((el) => {
      return A.map((el2) => {
        if (el !== el2) {
          return arr[el][el2];
        } else return 0;
      }).reduce((acc, cur) => {
        return acc + cur;
      });
    }).reduce((acc, cur) => {
      return acc + cur;
    });
    const Banswer = B.map((el) => {
      return B.map((el2) => {
        if (el !== el2) {
          return arr[el][el2];
        } else return 0;
      }).reduce((acc, cur) => {
        return acc + cur;
      });
    }).reduce((acc, cur) => {
      return acc + cur;
    });
    resultArr.push(Math.abs(Aanswer - Banswer));
  });
};
solution();
console.log(Math.min(...resultArr));

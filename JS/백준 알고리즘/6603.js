// // 6603: 로또

// const { deflateSync } = require("zlib");

// /*
// 독일 로또 => 1, 2,... 49에서 수 6개를 뽑는다
// 조합을 만들어야 하는데
// k>6 이상인 수를 골라 집합 S를 만든 다음 그 수만을 가지고 번호를 선택함
// 즉, k와 조합을 주면 해당 수로 6개 자리 조합을 고른다

// sudo code:
// 1. k와 조합을 받는다
// 2. usedArr를 만들다
// 3. k의 요소를 순회하면서

// */
// testCase = require("fs")
//   .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(0, -1);

// testCase = testCase.map((el) => el.split(" ").map(Number));
// const r = 6;
// let result = new Array(r).fill(0);
// let answer = [];
// const solution = () => {
//   for (let i = 0; i < testCase.length; i++) {
//     result = Array(r).fill(0);
//     [arrLen, ...arr] = testCase[i];

//     dfsCombination(0, 0);
//     if (i < testCase.length - 1) console.log("");
//   }
// };

// const dfsCombination = (level, BeginWith) => {
//   if (level == r) {
//     return console.log(...result);
//   }

//   for (let i = BeginWith; i < arr.length; i++) {
//     result[level] = arr[i];
//     dfsCombination(level + 1, i + 1);
//   }
// };
// solution();

// 안보고 푼다 시발
/**
 * K개의 수인 S의 집합을 를 수열로 나타내면 되는것
 */

[...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

arr.pop();
arr = arr.map((el) => el.split(" "));

let answer_list = [];
let answer = [];
let isVisited = [];

const dfsCombination = (level, begin, K, testCase) => {
  if (level === 6) {
    return console.log(answer.join(" "));
    // answer_list.push(answer);
  }

  for (let i = begin; i < K; i++) {
    answer[level] = testCase[i];
    dfsCombination(level + 1, i + 1, K, testCase);
  }
};

const solution = () => {
  arr.forEach((testCase, idx) => {
    K = testCase.shift();
    // console.log(testCase, K, idx);
    answer = new Array(K).fill(0);
    isVisited = new Array(K).fill(0);
    dfsCombination(0, 0, K, testCase);
    console.log("");
  });
};

solution();

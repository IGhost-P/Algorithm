// 부분 수열의 합
/**
 * 정수가 주어지는데, 부분 수열임, result가 얼마나 될지는 모르나, 더한값이 S가 되는것들을 고르면된다
 */

[first, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
[N, S] = first.split(" ").map(Number);
arr = arr.split(" ").map(Number);
count = 0;

const sumOfSubsets = (level, weigth) => {
  if (level >= N) {
    return;
  }

  weigth += arr[level];

  if (weigth == S) {
    count++;
  }

  // 선택하지 않은 가지
  sumOfSubsets(level + 1, weigth);

  // 선택한 가지
  sumOfSubsets(level + 1, weigth - arr[level]);
};

sumOfSubsets(0, 0);
console.log(count);

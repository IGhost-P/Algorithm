// 1920 : 수 찾기
/**
 * 이분 탐색을 이용하자
 */

[...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const BinarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right - left) / 2) + left;

  while (left <= right) {
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return false;
    }
    mid = Math.floor((right - left) / 2) + left;
  }
  return false;
};

const solution = (testCase) => {
  let answer = [];
  N = Number(testCase.shift());
  Aarr = testCase
    .shift()
    .split(" ")
    .map((el) => Number(el));
  M = Number(testCase.shift());
  Barr = testCase
    .shift()
    .split(" ")
    .map((el) => Number(el));
  Aarr.sort((a, b) => a - b);
  Barr.map((el) => {
    if (BinarySearch(Aarr, el)) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  });

  return answer.join("\n");
};

console.log(solution(testCase));

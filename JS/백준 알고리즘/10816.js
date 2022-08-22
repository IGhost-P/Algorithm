// 10816 : 숫자 카드2
/**
 * 이분탐색을 이용하자,
 *
 * 이분탐색을 이용해서 숫자가 나오는 가장 첫번째 위치를 구하고,
 * 다시 한번 이용해서 숫자가 나는 가장 마지막 위치를 구해서 서로의 인덱스로 빼면된다.
 */
[...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

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

const findFirst = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (arr[mid] === target) {
      right = mid;
    } else if (arr[mid] >= target) {
      right = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
  return left;
};

const findLast = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (arr[mid] === target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid;
    } else if (arr[mid] <= target) {
      left = mid + 1;
    }
  }
  return left;
};

const solution = () => {
  let answer = [];
  Aarr.sort((a, b) => a - b);
  Barr.map((el) => {
    let first = findFirst(Aarr, el);
    let last = findLast(Aarr, el);
    answer.push(last - first);
  });
  return answer.join(" ");
};

console.log(solution());

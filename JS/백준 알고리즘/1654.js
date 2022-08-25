// 1654 : 랜선 자르기
/**
 * 파라미터 서치를 이용한 방식
 *
 * mid = 최대 길이
 * left,right의 판단은 mid로 arr를 잘랐을때 target 보다 적으면 rigth를 줄이고 target 보다 크면 left를 올린다
 */

[testCase, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[N, target] = testCase.split(" ").map(Number);
arr = arr.map(Number);
maxLen = Math.max(...arr) + 1;

let left = 0;
let right = maxLen;
let answer = [];
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Math.floor(arr[i] / mid);
  }
  if (sum >= target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  if (sum >= target) {
    answer.push(mid);
  }
}

console.log(Math.max(...answer));

// 30분

// 18870 : 좌표 압축
/**
 * 정렬을 하고
 * 중복을 제거 한뒤에 => 스택을 이용하자
 *
 * 이분 탐색을 통해, 찾은 수의 인덱스 값이, 자신 보다 아래의 숫자 내용 이다.
 *
 */

[N, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
arr = arr.split(" ").map((el) => Number(el));

// 1. 정렬
temp = [...arr].sort((a, b) => a - b);

// 2. 중복 제거
const stack = [];

for (let i = 0; i < N; i++) {
  if (temp[i] !== stack[stack.length - 1]) {
    stack.push(temp[i]);
  }
}

// 3. 이분 탐색

const BinarySearch = (arr, target) => {
  let left = 0;
  let right = stack.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

const answerList = [];

arr.map((el) => {
  let answer = BinarySearch(stack, el);
  answerList.push(answer);
});

console.log(answerList.join(" "));

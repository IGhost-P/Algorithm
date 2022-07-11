// 11727 : 2*n 타일링 2
/**
 * 1*2 , 2*1 , 2*2 타일
 * 2*1 = 2*1 로 1개
 * 2*2 = 1*2로 2개 , 2*1로 2개 2*2 로 1개 = 3개
 * 2*3 = 2*2에다가 2*1로   를 양쪽에 끼움 = *2 + 1(양쪽에 끼움)
 * 2*4 = 2*2의 방법의 제곱
 * 2*5 = 2*4의 방법 그대로
 *
 * 점화식으로 표현해보자면 , 1,3,3,6.. 이니, fn이 짝수 이면 -2의 2배
 * fn이 홀수 이면 -1이 그대로
 */

testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim();

const arr = [1, 3, 6, 9];
for (let i = 4; i <= testCase; i++) {
  if (i % 2 != 0) {
    arr[i] = arr[i - 2] * 2 + arr[i - 2];
  } else {
    arr[i] = arr[i - 1] * 2;
  }
}

console.log(arr);

console.log(arr[testCase]);

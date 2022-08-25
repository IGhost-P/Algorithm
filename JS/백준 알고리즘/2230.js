// 2230 : 수 고르기
/**
 * 투 포인터를 이용하자
 *
 * sudo code:
 * 1. 정렬을 한다
 * 2. str, end를 = 0으로 초기화한다, min는 가장 큰값은 infiniy로 초기화한다
 * 3. str-end가 M 이상일때까지 end를 돌린다,
 * 4. M이상이면 해당값을 min으로 설정해주고 str을 증가시킨다
 * 5. end가 N이 되면 종료한다
 */

[testCase, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[N, M] = testCase.split(" ").map(Number);
arr = arr.map(Number);

arr.sort((a, b) => a - b);

let str = 0;
let end = 0;
let min = Infinity;

while (end < N) {
  if (arr[end] - arr[str] >= M) {
    min = Math.min(min, arr[end] - arr[str]);
    str++;
  } else {
    end++;
  }
}

console.log(min);

// 10분

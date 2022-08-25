// 1806 : 부분합
/**
 * sudo code:
 * 2. str, end를 = 0으로 초기화한다, min는 가장 큰값은 infiniy로 초기화한다
 * 3. str+end가 M 이상일때까지 end를 돌린다,
 * 4. M이상이면 end-str을 min으로 설정해주고 str을 증가시킨다
 * 5. end가 N이 되면 종료한다
 */

[testCase, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

[N, M] = testCase.split(" ").map(Number);
arr = arr.split(" ").map(Number);

let str = 0;
let end = 0;
let min = Infinity;
let sum = 0;
while (end <= N) {
  sum += arr[end];
  if (sum >= M) {
    min = Math.min(min, end + 1 - str);
    sum = 0;
    str++;
    end = str;
  } else {
    end++;
  }
}

console.log(min === Infinity ? 0 : min);

// 40분

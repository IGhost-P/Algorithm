// 1748: 수 이어쓰기 1
/**
 * sudo code: 시간 초과 날수도
 * n만큼 수를 받는데 +=으로 문자열로 받는다
 * 문자열의 길이를 출력한다
 *
 * sudo code:
 * 1. n을 입력 받는다
 * 2. n의 길이보다 -1한 9...반복을 뺀다
 * 3. 뺸값을 -1한 길이 의 +1을 해서 곱하낟
 * 4. 마지막까지 더한다
 */

let N = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim();

answer = 0;
nine = "9";
NLen = N.length - 1;
for (let i = NLen; i >= 0; i--) {
  remain = 0;
  remain = N - nine.repeat(i);
  answer += remain * (i + 1);
  N = nine.repeat(i);
}
console.log(answer);

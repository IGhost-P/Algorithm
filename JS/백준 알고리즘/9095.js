// 9095 : 1,2,3 더하기
/**
 * 동적 계획법으로 풀면 될것 같다
 * 먼저 패턴을 찾아보자
 *
 * # 1일뗴
 * 1
 * = 1개
 *
 * # 2일떄
 * 1+1
 * 2
 * = 2개
 *
 * # 3일떄
 *
 * 1+1+1
 * 1+2
 * 2+1
 * 3
 * = 4개
 *
 * #4일떄
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * 2+2
 * 1+3
 * 3+1
 *
 * = 7개
 *
 * # 5일때
 * 1+1+1+1+1 1
 * 1+1+1+2 자리 바꾸면서 반 =복 4
 * 1+ 2+ 2 자리 바꾸면서 = 3
 * 1+1+3 자리 바꾸면서 = 3
 *
 *  = 11개
 * 4 이후론 여태 더한걸 다 더하는듯
 *
 *
 *
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

result = new Array(11).fill(0);
result[0] = 1;
result[1] = 2;
result[2] = 4;
result[3] = 7;
for (let i = 4; i < 11; i++) {
  result[i] = result[i - 1] + result[i - 2] + result[i - 3];
}
arr.map((el) => {
  console.log(result[el - 1]);
});
console.log(result);

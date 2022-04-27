// 10773 : 제로
/**
 * 0을 외치면 => stack pop을 하면 된다
 * stack의 수를 모두 더해서 출력하면 된다
 *
 * sudo code :
 * 1. K 정수를 받는다(k만큼 반복할것)
 * 2. k만큼 반복도중에 0을 입력 받으면 pop한다
 *  2-1, 다행히 0을 외칠땐 항상 stack pop이 가능하다는걸 알 수 있다
 */

[K, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr.map(Number);

const answer = [];

arr.forEach((num) => {
  if (num === 0) return answer.pop();
  return answer.push(num);
});

console.log(eval(answer.join("+")) ?? 0);

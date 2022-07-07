// 7795 : 먹을 것인가 먹힐 것인가
/**
 * 간단하게 A 배열을 돌면서, 자신보다 작은(미만) 값이 있다면, 카운트를 해준다
 *
 * 시간 초과난것을 보니, 애초에 필요없는 값이면 반복문을 못돌리게 하자
 */

[N, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < N; i++) {
  let count = 0;
  const [A, B] = testCase.shift().split(" ").map(Number);
  const arrA = testCase
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const arrB = testCase
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  arrA.forEach((el) => {
    if (el < arrB[0]) {
      return;
    }

    for (let j = 0; j < B; j++) {
      if (el > arrB[j]) {
        count++;
      }
    }
  });
  console.log(count);
}

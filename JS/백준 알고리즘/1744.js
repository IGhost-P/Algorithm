// 1744 : 수 묶기
/**
 * {0, 1, 2, 4, 3, 5}일 때, 그냥 이 수열의 합을 구하면 0+1+2+4+3+5 = 15이다. 하지만, 2와 3을 묶고, 4와 5를 묶게 되면, 0+1+(2*3)+(4*5) = 27
 *
 * 고민해봐야 할것
 * 1. 어쩔때 묶지 말아야하는지?
 *  1-1. 0일때는 묶지 않는다.
 *  1-2. 1일때는 묶지 않는다.
 * 2. 음수가 나올때는?
 *  2-1. 짝수라면 묶는다
 *  2-2. 홀수라면 묶지 않는다
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = parseInt(N);
arr = arr.map(Number);
let answer = 0;
arr.sort((a, b) => a - b);

let positiveArr = arr.filter((v) => v > 0);
positiveArr.sort((a, b) => b - a);
const negativeArr = arr.filter((v) => v <= 0);

i = 0;
while (i < positiveArr.length - 1) {
  if (positiveArr[i] === 1 || positiveArr[i + 1] === 1) {
    answer += positiveArr[i] + positiveArr[i + 1];
    i += 2;
    continue;
  }
  answer += positiveArr[i] * positiveArr[i + 1];
  i += 2;
}

if (positiveArr.length % 2) {
  answer += positiveArr[positiveArr.length - 1];
}

i = 0;
while (i < negativeArr.length - 1) {
  answer += negativeArr[i] * negativeArr[i + 1];
  i += 2;
}

if (negativeArr.length % 2) {
  answer += negativeArr[negativeArr.length - 1];
}

console.log(answer);

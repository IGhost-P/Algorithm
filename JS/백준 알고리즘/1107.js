// 1107 : 리모컨
/**
이 문제는 이동하려고 하는 채널이 500,000까지 이므로 누를 수 있는 채널을 모두 조사한 다음,

해당 채널에서 N까지 얼마만큼 + 또는 - 를 해야 갈 수 있을 지를 구해 가장 최소의 횟수를 구하면 됩니다.

채널이 500,000 까지이기 때문에 최악의 경우는 100번에서 모든 번호를 누를 수 없고 + 버튼으로 500,000까지 가는 499,900번 입니다.

따라서, 버튼을 약 1,000,000 번까지 누를수 있게 검사를 한다면 최악의 경우까지 전부 검사가 가능합니다.

그럼 브루트 포스를 수행한 코드를 보시겠습니다.
 *
 * sudo code:
 * 1. 데이터를 받는다
 * 2. 최소 100에서 차이나는 만큼 +-누르는 경우를 기본으로 해두고
 * 3. 번호를 누르고, + 차이나는만큼 +=를 누르는 경우랑 비교
 * 4. 전부 비교해서 가장 작은 값을 내보낸다
 */

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = testCase.shift();
M = Number(testCase.shift());
target = N;
broken = testCase[0] ? testCase[0].split(" ").map(Number) : [];
answer = Math.abs(100 - target);
let a = new Set();

for (let i = 0; i < 1000001; i++) {
  strArr = [...String(i)];

  for (let j = 0; j < String(i).length; j++) {
    if (broken.includes(Number(strArr[j]))) {
      break;
    } else if (j == String(i).length - 1) {
      answer = Math.min(answer, String(i).length + Math.abs(i - target));
    }
  }
}
console.log(answer);

// 3015 : 오아시스 재결합
/**
 * 키가 큰 사람이 있다면 자신이 더이상 볼수 없다
 * 1 2 5 4 3 이라 한다면
 * 1과 2, 2,5, 1,5 는 서로 불수 있고
 * 5,4, 4,3, 5,3 도 볼수 있다
 *
 * 쌍이니깐 한쪽만 생각하면
 * 1 = 2, 5
 * 2 = 5
 * 5 = 4, 3
 * 4= 3
 * 이므로 자신보다 높은 키를 발견하기 전 사람까지만 구하면될것이다
 *
 * 이전에 풀었던 옥상 관리원 문제를 이용하자
 *
 * 2 ,4, 1, 2, 2, 5 1
 *
 * sudo code:
 * 1. N과 arr를 입력 받는다
 * 2. 1~N까지 돌면서 arr에 있는 값들을 비교한다
 * 3. stack이 비어있지 않으면서 , arr[i]보다 높은 값이 있다면, 해당 stack의 값(인덱스) - i를 answer[stack값(인덱스)]를 넣는다
 * 4. 아니라면 계속 push..
 *
 * 하지만 생각해둬야하는것은, 자신보다 키가 작더라도, 서로 볼수있는게 아니다,
 *
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stackHeight = [];
const stackCnt = [];
const map = new Map();
let answer = 0;

for (let i = 0; i < N; i++) {
  // console.log(arr[i], stackCnt, stackHeight);
  while (stackHeight.length && arr[i] > stackHeight[stackHeight.length - 1]) {
    stackHeight.pop();
    answer += stackCnt.pop();
  }
  if (stackHeight.length === 0) {
    stackHeight.push(arr[i]);
    stackCnt.push(1);
  } else {
    if (arr[i] == stackHeight[stackHeight.length - 1]) {
      // console.log(arr[i], stackCnt, stackHeight);
      stackHeight.pop();
      cnt = stackCnt.pop();
      answer += cnt;
      if (stackHeight.length !== 0) {
        answer += 1;
      }
      stackHeight.push(arr[i]);
      stackCnt.push(cnt + 1);
    } else {
      stackHeight.push(arr[i]);
      stackCnt.push(1);
      answer += 1;
    }
  }
}

console.log(answer);

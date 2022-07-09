// 1932 : 정수 삼각형
/**
 * 전부다 더하면서 가장 큰수를 찾는 방법이 있겠지만 , 브르트포스로 풀면 아마, 시간 초과가 날듯, 근데 일단 해보자
 *
 * 자기 언덱스의 -1 과 0위치의 값(answerList)을 자기 자신에 더하면 될듯
 */

[N, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

let answerList = [];
const answer = [];

for (let i = 0; i < N; i++) {
  let arr = testCase[i].split(" ").map(Number);

  if (answer.length > 0) {
    // console.log(answer.length);
    for (let j = 0; j < arr.length; j++) {
      if (j == 0) {
        answerList.push(arr[0] + answer[i - 1][0]);
      } else if (j == i) {
        answerList.push(arr[j] + answer[i - 1][j - 1]);
      } else {
        answerList.push(
          Math.max(
            arr[j] + Number(answer[i - 1][j - 1]),
            arr[j] + Number(answer[i - 1][j])
          )
        );
      }
    }

    answer.push(answerList);
    answerList = [];
  } else {
    answer.push(arr);
  }
}

// console.log(answer);

console.log(Math.max(...answer[N - 1]));

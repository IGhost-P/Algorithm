// 가장 긴 증가하는 부분 수열
/*
1000 * 1000 => 최대 시간 복잡도 괜찮을듯

아까 풀었던 느낌으로 가면 될것 같은데?
길이가 
최소값 : 0 ~  최대값 : 주어진 배열 길이

길이가 2일수 있는 경우
=> 10 20, 10 30, 10 50 20 30 20 50 30 50

*/

[testCase, arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
testCase = Number(testCase);
arr = arr.split(" ").map(Number);
answerList = new Array(arr.length).fill(1);
answer = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      answerList[i] = Math.max(answerList[i], answerList[j] + 1);
    }
  }
}
console.log(Math.max(...answerList));

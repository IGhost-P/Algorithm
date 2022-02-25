// 등수 매기기
/*
N 명의 학생이 참가
자신이 몇등할것인지 제출

=> 근데 학생들이 작성한 예상 등수로 등수를 매겨야함

만약 A등으로 예상했는데 실제 B등이라면
그래수 불만도 abs(A-B)로 나타냄

불만도를 최소로하면서 등수에 매긴다

예제..
5명
[1,5,3,1,2] 

1,1,2,3,5 =>
1,2,3,4,5 
불만도 1, 1, 1 합치면 3

[1,1,2,1,1]
그리디로 생각해보자
일단 정렬을함 숫자대로
[1,1,1,1,2]

그리고 자신의 인덱스랑 뻄
? 뭐가 이상한거지, 걍 정렬하고 빼고 총함 구하면 항상 최소일수밖에 없지 않나..?
*/
[testNum, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

testNum = Number(testNum);
arr = arr.map(Number);

arr = arr.sort((a, b) => a - b);
result = arr.map((v, i) => Math.abs(i + 1 - v));
console.log(
  result.reduce((arr, cur) => arr + cur),
  result,
  arr
);

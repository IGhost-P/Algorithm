// 뒤집기
/* 

0,1로만 이루어진 문자열 => 연속된 하나이상의 숫자를 잡고 뒤집음

00001111
0000 => 1111
11111111 이렇게

예를 들어 S=0001100 일 때,

전체를 뒤집으면 1110011이 된다.
4번째 문자부터 5번째 문자까지 뒤집으면 1111111이 되어서 2번 만에 모두 같은 숫자로 만들 수 있다.


그리디를 이용해보자면
연속된 숫자가 많은 경우를 먼저 뒤집는다

흠.. 시작 했을때 수랑 다를때마다 횟수를 늘리면 될것 같은데.. 이게 십만이라서..
*/

testCase = require("fs").readFileSync("예제.txt").toString().trim();

let frist = testCase[0];
let answer = 0;
for (v of testCase) {
  if (frist != v) {
    answer++;
  }
  if (frist != v && pre == v) {
    answer--;
  }
  pre = v;
}
console.log(answer);

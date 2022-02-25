// 배
/* 
1분에 박스를 하나씩..
배에 무게 제한이 있음

예제..
1줄 = 크래인 수
2줄 = 각 크레인의 무게제한
3줄 = 박스수
5줄 = 박스 arr

못옮기면 -1

3
6 8 9
5
2 5 2 4 7

가장 큰 크래인으로 가장 큰 박스 부터 치운다
=> 크레인은 내림 차순
=> 박스는 내림 차순 으로 치워버린다
[9,8,7]
[7,6,4,2,2]
풀이
= 9 = 7
= 8 = 5
= 7 = 4
1회 
= 9 = 2
= 8 = 2
7 = null
끝

배열이 끝날때까지 반복
 만약
 [9,8,7]
[9,9,8,2,2]
9 = 9
8 = 9 x -> 7
*/
[craneNum, craneArr, boxNum, boxArr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

// 초기화
craneNum += 0;
craneArr = craneArr
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
boxNum += 0;
boxArr = boxArr.split(" ").map(Number);
let answer = 0;
let flag = false;
while (boxArr.length >= 1) {
  // 매번 갱신해주자

  boxArr = boxArr.sort((a, b) => b - a);

  stop = false;
  before = boxArr.length;
  for (let j = 0; j < craneArr.length; j++) {
    for (let i = 0; i < boxArr.length; i++) {
      takeBox = boxArr[0];
      if (craneArr[j] >= takeBox) {
        boxArr.shift();
        break;
      } else if (craneArr[j] < takeBox && craneArr[j] >= Math.min(...boxArr)) {
        reBox = boxArr.shift();
        boxArr.push(reBox);
      } else {
        stop = true;
        break;
      }
    }
    if (stop) {
      break;
    }
  }

  if (before == boxArr.length) {
    flag = true;
    break;
  }
  answer++;
}

console.log(!flag ? answer : -1);

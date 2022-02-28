//도서관
/*
세준이 의 위치 0
정리해야할 책도 0

책의 원래 위치가 주어지면, 최소 걸음으로 해야한다

세준이는 한 걸음에 좌표 1칸씩, 책은 최대 M개
다 하고 나선 0으로 돌아올필요가 없음

예제..
책의 개수 7 , 세준이가 들수 있는 책의 개수 2
책의 위치
-37 2 -6 -39 -29 11 -28

모두 세준으로를 기준으로 떨어진 위치 일테고
- 까지 있는걸 보아하니 ,왼족 오른쪽이 나누어져 있는것 같다
일단 정렬을 해보면

-39 -37 -29 -28 -6 2 11 이고
책을 2개 들수 있으니, 
2개의 합이 가장큰 39 + 37 
그다음 29 28
그다음 2 11
그다음 6 0 
이렇게 하면 
흠... => 다시 돌아오는것도 생각해야 한다. 즉 가장 멀리 가면 돌아오는것도 가장 멀리
2수의 차이가 가장 적으면 좋을듯? 일단 서로 차이를 생각해보면

2, 6 ,1, 12, 8 , 9 이니깐
가장 큰 순서대로 가보자

-28 -6 = 28걸음 + 28걸음 
11 2 = 11걸음 + 11걸음
-37 -29 = 37걸음 + 37걸음
39 하면 끝  = 39걸음
=> 멂다.. 흠, 그럼 가장 멀리있는걸 나중에 해볼까?,

2 - 6 = 2+ 6 + 6
11 - 28 = 11 + 28 + 28
=> 멀어짐 양수, 음수를 고민해보자

6 11 = 11 + 11
-6 -28 = 28 + 28
37 29 = 37 + 37
39 = 39
,,
39랑 37을 제일 마지막 => 한번만 가면됨
29랑 28을 그다음
2 11을 다음
6을 다음
그럼 6 + 6
11 + 11
29 + 29
39 끝
= 131 오케!
결론 => 서로 합이 가장 작은 순서대로 가자
홀수이면 0을 추가해줘서 비교 할면 될듯..?
*/

testCase = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
[n, m] = testCase.shift().split(" ").map(Number);
arr = testCase.shift().split(" ").map(Number);

positive = [];
negative = [];
result = 0;
largest = Math.max(Math.max(...arr), -Math.min(...arr));

arr.forEach((el) => {
  if (el > 0) {
    positive.push(el);
    positive.sort((a, b) => b - a);
  } else {
    negative.push(-el);
    negative.sort((a, b) => b - a);
  }
});

// console.log(positive, negative);

while (positive.length != 0) {
  result += positive.shift();
  for (let i = 0; i < m - 1; i++) {
    if (positive.length >= 1) {
      positive.shift();
    }
  }
}

while (negative.length != 0) {
  result += negative.shift();
  for (let i = 0; i < m - 1; i++) {
    if (negative.length >= 1) {
      negative.shift();
    }
  }
}

console.log(result * 2 - largest);

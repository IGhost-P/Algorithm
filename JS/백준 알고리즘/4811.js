/* 
N개약 => 1개 => 반개 => W
N개약 => 반개 => 끝 => H

총 다 먹을라면 2N => 그동안 연락온 WH의 문자열 개수를 정하자
문자열이 1개 일때

W를 1번
W


문자열이 2개 일떄

W를 1번 + W와 H
WW
WH

문자열이 3개 일떄

W를 3번
WWW

문자열이 2개일때(W를 1번 + W와 H) + W와 H
WWH
WHW
WHH


문자열이 4개일때
= W로 시작하는 문자열이 3인 문자열 + W H

즉
dp[W 수][H 서] = 문자열 길이 라면
dp[1][0] = 'W' = 개수 1
dp[2][0] = 'WW' = 개수 1
dp[3][0] = 'WWW' = 개수 1
이제 H 1개를 써보자
dp[1][1] = WH = 개수 1
dp[2][1] = 'WWH' , 'WHW' = 개수 2
dp[3][1] = 'WWWH' , 'WWHW , 'WHWW = 개수 3

즉 dp[3][1] => 문자열 길이 4 = 문자열 길이가 3인  (dp[3][0] + H) + (dp[2][1] +W)
점화식으로 만들면
dp[w][h] => dp[w-1][h] + dp[w][h-1] (앞뒤 바꿈)
w+h = 는 문자열의 길이이고, 우리가 구해야하는건 알약개수*2인 문자열 길이이다

1) 쪼개진 알약이 없는 경우(H == 0) 

DP[W][H] = DP[W-1][1];

 

2) 온전/쪼개진 알약모두가 있는 경우

DP[W][H] = DP[W-1][H+1] + DP[W][H-1];

*/

testCase = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// 2차원 배열 만들기
let dpList = new Array(31).fill(1).map(() => Array());
testCase.pop();

const DP = () => {
  for (let i = 0; i < 31; i++) {
    dpList[0][i] = 1;
  }
  for (let w = 1; w < 31; w++) {
    for (let h = 0; h < 31; h++) {
      //   console.log(dpList[w][h], w, h);
      if (h == 0) dpList[w][h] = dpList[w - 1][1];
      else dpList[w][h] = dpList[w - 1][h + 1] + dpList[w][h - 1];
    }
  }
  return dpList;
};
DP();
testCase.forEach((el) => {
  console.log(dpList[el - 1][1]);
});

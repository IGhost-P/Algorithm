// 기타리스트
/*

매번 곡이 시작하기 전에 볼륨을 바꿈 = N개의 곡

곡이 시작하기 전에 바꿀수 있는 볼륨의 리스트 = V
현재 볼륨이 P = 지금 i번째 곡을 연주하기 전
= P + V[i] or P - V[i]
= 0보다 작은 값은 ㄴ
= M 보다 큰값은 ㄴㄴ

그럼담 리스트는 N길이
그중이세 시작할 볼륨이 S
볼륨 크기의 한계는 0<= 볼륨 <=M

e.g) 3 5 10 / 5 3 7 = 기존 리스트[V]
i 번째 곡  => V[i]에서 선택해서 볼륨을 바꿈 [1번 노래, 2번 노래 ,  3번 노래]
볼륨의 차이= [5,3,7]

1번 노래를 부를땐 V[1]+P or -V[1]+P를 해야함,
첫시작이 S= 5이니깐
= 5 + 5 or 5 - 5

2번 노래 를 부를땐  
= 10이라면 => 10 +3 = 13 (ㄴㄴ), 10 -3 = 7 (ㅇㅇ) 
= 0 이라면 => 0 + 3 = 3 (ㅇㅇ), 0 - 3 = -3 (ㄴㄴ)

3번 노래를 부를땐
= 7이리면 = 7 + 7 = 14(ㄴㄴ) , 7-7 = 0 (ㅇㅇ)
= 3이라면 = 3 + 7 = 10(ㅇㅇ) , 3 - 7 = -4 (ㄴㄴ)

재귀식으로 풀면 될라나? 

일단 0~M까지의 리스트를 만들자 그리고
at으로 try catch 하면 될거 같은데..? => 재귀적으로 접근해야할듯
[True,True,True,True,True,True,True,True,True,True,True]


 */
testCase = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
let N, S, M, V, i;
let answer = [];

function DF(volume, i) {
  if (i + 1 == N) {
    if (0 <= volume + V[i] && volume + V[i] <= M) {
      answer.push(volume + V[i]);
    }

    if (0 <= volume - V[i] && volume - V[i] <= M) {
      answer.push(volume - V[i]);
    }
  }

  if (0 <= volume + V[i] && volume + V[i] <= M) {
    DF(volume + V[i], i + 1);
  }

  if (0 <= volume - V[i] && volume - V[i] <= M) {
    DF(volume - V[i], i + 1);
  }
}

function solution(testCase) {
  // 1st
  [N, S, M] = testCase[0].split(" ").map(Number);

  // 2nd
  V = testCase[1].split(" ").map(Number);

  // set range

  // set S
  nowVolume = S;
  DF(nowVolume, 0);

  console.log(answer.length == 0 ? -1 : Math.max(...answer));
}

solution(testCase);

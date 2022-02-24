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

일단 0~M까지의 리스트를 만들자 그리고
[false,false,false,false,false,false,false,false,false,false,]
에서 가능하면 True 아니면 false로 접근하면 될듯


 */
testCase = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
let N, S, M, V, i, answer;

function solution(testCase) {
  // 1st
  [N, S, M] = testCase[0].split(" ").map(Number);

  // 2nd
  V = testCase[1].split(" ").map(Number);

  // set range
  let dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));

  // set S
  dp[0][S] = true;

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      // 첫번째줄 무시

      if (dp[i - 1][j] == false) {
        continue;
      }
      if (j - V[i - 1] >= 0) {
        dp[i][j - V[i - 1]] = true;
      }
      if (j + V[i - 1] <= M) {
        dp[i][j + V[i - 1]] = true;
      }
    }
  }

  answer = -1;
  for (let i = M; i >= 0; i--) {
    if (dp[N][i] == true) {
      answer = i;
      break;
    }
  }
  console.log(answer);
}

solution(testCase);

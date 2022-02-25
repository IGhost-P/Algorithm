// 센서
/* 

N개의 센세 => K개 까지만

예제
6
2
1 6 9 3 6 7

일단 정렬을 하자

1 3 6 6 7 9

그리고 거리를 구해보자
[2,3,0,1,2]
이중 제일 거리별로 자르면?

k 가 2개일때 수신 가능한 너미
[1] , [3 6 6 7 9]
1 + 4 = 5가됨
= [2][0,1,2]

*/

[N, K, arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
N = Number(N);
K = Number(K);
arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = [];

function solution() {
  if (K >= N) {
    console.log(0);
    return;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i + 1] - arr[i]);
  }

  for (let j = 0; j < K - 1; j++) {
    result.sort((a, b) => b - a);
    result[0] = 0;
  }
  console.log(result.reduce((acc, cur) => acc + cur));
}
solution();

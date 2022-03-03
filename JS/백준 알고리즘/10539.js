// 10539 : 수빈이와 수ㄹ
/* 
수빈이의 수열 = A의 해당 항까지의 평균 값을 그 항으로 하는 수열 B

예시를 봐보자)
1, 3, 2, 6 이라면 
1/1, (1+3)/2, (1+3+2)/3, (1+3+2+6)/4, (1+3+2+6+8)/5
1, 2, 2, 3, 4

즉 매번 i까지의 수열을 더하고, 해당 i로 나눈다
(A[0] + A[1]) / 2 = B[1]
(A[0] + A[1] + A[2]) / 3 = B[2]
B[i] * i+1 = A[i-1]

라는 점화식이 도출된다

이제 B가 주어진다면 거꾸로 A를 찾아가야하는데,
A를 구하는 것

B[1] = A[1]/1
B[2] = A[1]+A[2]/2 = B[1] + A[2]/2

B[2] - B[1] = A]2]/2
2(B[2] - B[1]) = A[2]

이제 구해보자

*/

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

len = Number(testCase.shift());
B = testCase[0].split(" ").map(Number);
A = Array(len).fill(0);

const solution = (B) => {
  A[0] = B[0];

  for (let i = 1; i < len; i++) {
    C = A.reduce((arr, cur) => arr + cur);
    A[i] = B[i] * (i + 1) - C;
  }
  console.log(A.join(" "));
};
solution(B);

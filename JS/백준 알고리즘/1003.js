// 1003 : 피보나치 함수
/* 

재귀 적으로 피보나치를 하면 문제가 생김
DP를 이용해서 
메모리제이션을 이용하자

0 과 1이 몇번 호출되는지

*/

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

num = testCase.shift().trim();
arr = testCase.map(Number);

const fibo = (num) => {
  cache = Array(num + 1).fill(0);
  cache[0] = 1;
  cache[1] = 0;
  cache[2] = 1;

  for (let i = 3; i <= num; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache;
};

for (let i = 0; i < num; i++) {
  fiboNum = arr[i];
  caches = fibo(fiboNum + 1);
  console.log(caches[fiboNum], caches[fiboNum + 1]);
}

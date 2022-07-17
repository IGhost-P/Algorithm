// 11727 : 2*n 타일링 2

testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim();

const arr = [1, 3];
for (let i = 2; i <= testCase; i++) {
  arr[i] = ((arr[i - 1] % 10007) + ((arr[i - 2] * 2) % 10007)) % 10007;
}

console.log(arr)
console.log(arr[testCase - 1]);

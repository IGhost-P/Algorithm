// 17298 : 오큰수
/**
 * 오른쪽에 있으면서 가장 왼쪽에 있는수
 * [3,5,2,7] 이라 하면
 * 3입장에서 큰수는 5,7 그중 5
 * 5입장에서 큰수는 7 그중 7
 * 2 입장에서 큰수는 7 그중 7
 * 7 입장에서는 없음 -1
 *
 * 이전에 풀었던 텁 문제랑 비슷하게 풀어보자면
 * NGE[stack.pop()] 이 = arr[i] 가 되는것을 확인할 수 있다
 *
 * sudo code:
 * 1. N개의 수를 입력받기 ,arr 입력 받기
 * 2. 반복문으로 0~N-1 수를 확인하기
 *  2-1 : 만약 arr[i]가 arr[stack의 마지막 수]보다 크면, NGE[stack.pop()] = arr[i] (NGE은 기본적으로 -1로 채우기)
 * 2-2 : 아니면 그대로 stack.push(i)
 */

const { platform } = require("os");

[N, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = parseInt(N);
arr = arr.split(" ").map((v) => parseInt(v));

const stack = [];
const NGE = new Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
    NGE[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(NGE.join(" "));

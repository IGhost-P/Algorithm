// 6198 : 옥상 정원 꾸미기
/**
 * 중간에 높은 빌딩이 있더라도 확인이 가능해야하낟
 * 자기보다 작으면 스택에 넣기, 자기보다 크면, 큰 탑과 해당 스택에 있는 빌딩과의 거리 차이를 answer에 넣기
 *
 *
 */

let [N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let stack = [];
let answer = Array(N).fill(0);
arr.push(1000000000);
for (let i = 0; i <= N; i++) {
  // 스택이 비어있지 않으면서, (현재 탑이, 스택에 있는 인데스의 탑보다 큰 경우)
  while (stack.length && arr[i] >= arr[stack[stack.length - 1]]) {
    temp = stack.pop();
    answer[temp] = i - temp - 1; // 스택에 있는 인덱스의 위치에 있는 탑에 현재 탑 을 뺀다
  }
  stack.push(i); // 그리고 계속해서 추가한다
  console.log(stack, answer);
}
console.log(eval(answer.join("+")));

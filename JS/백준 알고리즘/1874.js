// 1874 : 스택 수열
/**
 * 스택을 두개를 사용하자
 * 1,2,3,4 => 4,3
 * 1,2,5,6, => 4,5,6
 * 1,2,,5,7,8, => 4,5,6,8,7,5,2,1
 *
 * 즉 매 1~n까지의 숫자를 파악하면서, 해당 숫자를 넣어야하는지, 아니면 push 해야하는건지 파악을 해야함
 *
 * sudo code:
 * 1. n입력을 받는다, 입력받은 arr를 받는다
 * 2. n만큼 반복문을 돌린다
 *  2-1. i 가 arr[0] 보다 작거나 같다면 left 스택에 추가
 *  2-2. i 가 arr[0] 보다 크다먄 left를 pop하여 right에 추가, arr[0]을 제거한다
 * 3. i가 n이 되었을때 arr의 length가 남아있다먄 'NO'
 */

const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let i = 1;
const left = [];
const right = [];
const answer = [];
const temp = [...arr];

while (arr.length) {
  if (i > arr[0]) {
    right.push(left.pop());
    arr.shift();
    answer.push("-");
  } else if (i <= arr[0]) {
    left.push(i);
    answer.push("+");
    i++;
  }
}

right.join("") === temp.join("")
  ? console.log(answer.join("\n"))
  : console.log("NO");

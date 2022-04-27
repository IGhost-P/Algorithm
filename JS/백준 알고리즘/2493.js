// 2493 : 탑
/**
 *
 * 아래 반례를 생각하면 좋을듯
 * 6
 * 9 7 6 5 3 4
 *
 * 9보다 7이 작으니 answer 7위치에는 9의 index, 스택에는 [0,1] 이 담긴다
 * 7보다 6이 작으니 answer 6위치에는 7의 index, 스택에는 [0,1,2] 이 담긴다
 * 6보다 5이 작으니 answer 5위치에는 6의 index, 스택에는 [0,1,2,3] 이 담긴다
 * 5보다 3이 작으니 answer 3위치에는 5의 index, 스택에는 [0,1,2,3,4] 이 담긴다
 * 3보다 4가 크니 스택을 pop한다 스택에는 [0,1,2,3]
 * 4보다 arr[3] = 5가 더 크니 answer 4위치에는 5의 index, 스택에는 [0,1,2,3,5] 이 담긴다
 *
 * answer를 출력한다
 *
 * sudo code :
 * 1. N과 arr를 받는다
 * 2. arr를 순차적으로 확인한다
 * 3. stack에는 arr의 index가 들어가고, stack의 마지막 값을 arr에 담았을때 해당 값보다 arr[i] 가 더 작다면 stack의 마지막 인덱스를 넣는다
 * 4. 아닐 경우 pop을 하면서 더큰 값을 가지고 있는 인덱스가 나올때까지 한다
 *
 */
let [N, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
N = Number(N);
arr = arr.split(" ").map(Number);
const stack = [0];
answer = new Array(N).fill(0);
for (let i = 1; i < N; i++) {
  if (arr[i] < arr[stack[stack.length - 1]]) {
    answer[i] = stack[stack.length - 1] + 1;
    stack.push(i);
  } else {
    while (arr[i] > arr[stack[stack.length - 1]]) {
      stack.pop();

      if (arr[i] < arr[stack[stack.length - 1]]) {
        answer[i] = stack[stack.length - 1] + 1;
        stack.push(i);
      }

      if (stack.length === 0) {
        answer[i] = 0;
        stack.push(i);
        break;
      }
    }
  }
}

console.log(answer.join(" "));

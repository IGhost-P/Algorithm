// 10828 스택
/**
 * 명령을 switch문으로 받고, 배얄 관련 메서드로 구현을 하자
 *
 * sudo code:
 * 1. 명령어의 수를 받는다, N
 * 2. N만큼의 명령어를 받고, ' '으로 구분한다
 * 3. 각 명령어를 switch 문으로 처리한다
 * 4. Console.log로 출력할경우 시간초과를 고려해, answer에 담아 join으로 처리한다
 */

const [N, ...operaters] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
const operater = operaters.map((el) => el.split(" "));
const stack = [];
const answer = [];

const processOperater = (operater) => {
  switch (operater[0]) {
    case "push":
      stack.push(operater[1]);
      break;
    case "pop":
      answer.push(stack.pop() ?? -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack[stack.length - 1] ?? -1);
      break;
    default:
  }
};

const solution = (N, operater) => {
  operater.map((el) => {
    processOperater(el);
  });
  console.log(answer.join("\n"));
};

solution(N, operater);

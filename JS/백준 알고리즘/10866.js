// 10866 : 덱
/**
 * switch문을 이용해서 구하면 될것 같다
 * 이전 큐 문제랑 다를게 없는듯!
 */

let [N, ...methods] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = +N;
methods = methods.map((el) => el.split(" "));
let answer = [];
let deque = [];

const Deque = (method) => {
  switch (method[0]) {
    case "push_front":
      deque.unshift(method[1]);
      break;
    case "push_back":
      deque.push(method[1]);
      break;
    case "pop_front":
      answer.push(deque.shift() ?? -1);
      break;
    case "pop_back":
      answer.push(deque.pop() ?? -1);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque.length === 0 ? 1 : 0);
      break;
    case "front":
      answer.push(deque[0] ?? -1);
      break;
    case "back":
      answer.push(deque[deque.length - 1] ?? -1);
  }
};

const solution = (N, methods) => {
  for (let i = 0; i < N; i++) {
    Deque(methods[i]);
  }
  return console.log(answer.join("\n"));
};
solution(N, methods);

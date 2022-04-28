// 10845 : 큐
/**
 * 큐에대한 내용이다
 * 해당 내용에 맞는 메서드를 switch문으로 처리하고
 * answer.push를 한뒤에 join 해서 풀자
 *
 * sudo code:
 * 1. N과 메서드를 받는다
 * 2. 메서드의 0번위치를 switch 를 돌리고
 * 3. 1번 위치를 answer에 push 하자
 * 4. join으로 풀자
 */

[N, ...methods] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

methods = methods.map((el) => el.split(" "));
const answer = [];
const queue = [];

const Queue = (method) => {
  switch (method[0]) {
    case "push":
      queue.push(method[1]);
      break;
    case "pop":
      answer.push(queue.length ? queue.shift() : -1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue.length ? 0 : 1);
      break;
    case "front":
      answer.push(queue[0] ? queue[0] : -1);
      break;
    case "back":
      answer.push(queue[queue.length - 1] ? queue[queue.length - 1] : -1);
    default:
      break;
  }
};

const solution = (N, methods) => {
  methods.map((method) => {
    Queue(method);
  });
  return console.log(answer.join("\n"));
};

solution(N, methods);

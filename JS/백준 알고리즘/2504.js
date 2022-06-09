// 2504 : 괄호의 값
/**
 * 받아온 값들을 비교한다, 스택에 넣으면서
 * 해당 값이 )이라면 , 전의 값을 비교한다,
 *  전의 값이 (가 아니라면, *2
 *  전의 값이 ( 이라면 +2
 *
 * 반대도 마찬 가지
 * 해다 값이 ]이라면, 전의 값을 비교한다,
 *  전의 값이 [가 아니라면, *3
 *  전의 값이 [ 이라면 +3
 *
 * 숫자들은 answer_list에 담고, join후 eval로 계산한다.
 */

[...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("");

let answer_list = [];
const answer = 0;
let flag = false;
const stack = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "(" || arr[i] === "[") {
    stack.push(arr[i]);
  } else if (arr[i] === ")") {
    if (stack.length === 0) {
      flag = true;
      break;
    }
    if (arr[i - 1] === "(") {
      stack?.pop();
      answer_list.push("+2");
    } else if (arr[i - 1] === "[") {
      flag = true;
      break;
    } else {
      stack?.pop();
      if (stack.length > 0) {
        answer_list.push(answer_list.pop() * 2);
      } else {
        answer_list.push("*2");
      }
    }
  } else if (arr[i] === "]") {
    if (stack.length === 0) {
      flag = true;
      break;
    }
    if (arr[i - 1] === "[") {
      stack?.pop();
      answer_list.push("+3");
    } else if (arr[i - 1] === "(") {
      flag = true;
      break;
    } else {
      stack?.pop();
      if (stack.length > 0) {
        answer_list.push(answer_list.pop() * 3);
      } else {
        answer_list.push("*3");
      }
    }
  }
  console.log(answer_list, stack);
}

console.log(flag ? answer : eval(answer_list.join("")));

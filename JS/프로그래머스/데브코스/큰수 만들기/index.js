function solution(number, k) {
  var answer = "";
  let stack = [];
  let len = number.length;
  for (let i = 0; i < len; i++) {
    let num = number[i];
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  stack.splice(stack.length - k, k);
  answer = stack.join("");
  return answer;
}

console.log(solution("0001", 2));

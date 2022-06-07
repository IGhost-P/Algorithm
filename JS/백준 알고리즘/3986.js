// 3986 :  좋은 단어
/**
 * 모든 글자가 A와 B로 바뀌었다, A또는 B끼리 이어지는 단어를 만들자
 *
 * 대표 로직을 생각해보면,
 * 리스트를 순차적으로 스택에 넣는다
 * 스택에 넣을때 스택의 가장 윗부분과 넣을 숫자가 같다면 Pop
 * 같지 않다면 남긴다. 끝까지 갔을때 배열이 비어있지 않다면 안됨
 *
 * sudo code:
 * 1. N과 리스트를 받는다
 * 2. N만큼 리스트를 받는다
 * 3. 리스트를 스택에 넣는다
 *  3-1 넣을 값과 스택의 윗부분고 같다면 pop
 *  3-2 같지 않다면 남긴다
 * 4. 리스트가 비어있지 않다면 좋은 글자가 아니다
 *
 */

[N, ...strList] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
for (let i = 0; i < N; i++) {
  let str = strList[i];
  let stack = [];

  for (let j = 0; j < str.length; j++) {
    if (stack.length === 0) {
      stack.push(str[j]);
    } else if (stack[stack.length - 1] === str[j]) {
      stack.pop();
    } else {
      stack.push(str[j]);
    }
  }
  if (stack.length === 0) {
    answer += 1;
  }
}

console.log(answer);

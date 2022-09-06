// 7785 : 회사에 있는 사람
/**
 * 사용자 이름을 Map 객체에 넣고, leave 명령어가 나오면 해당 사람을 삭제한다.
 * 이후 남아 있는 사람의 이름을 출력하자
 */

[N, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
let map = new Map();
let answer = [];
for (let i = 0; i < N; i++) {
  const [name, command] = testCase[i].split(" ");
  if (command === "leave") {
    map.set(name, false);
    continue;
  }
  if (command === "enter") {
    map.set(name, true);
  }
}

for (let [key, value] of map.entries()) {
  if (value) {
    answer.push(key);
  }
}

console.log(answer.sort().reverse().join("\n"));

// 13414 : 수강신청
/**
 * map 과 queue를 만들어
 * map에 이미 있으면 queue에서 삭제하고 맨뒤 => 근데 어차피 맨뒤잖아, 리버스 하고 set한뒤에 뒤에서부터 N 명 뽑으면 될거 같음
 */

[testCase, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "testCase.txt")
  .toString()
  .split("\n");
const [K, L] = testCase.split(" ").map(Number);
const queue = Array.from(new Set([...input].reverse())).reverse();
console.log(queue.slice(0, K).join("\n"));

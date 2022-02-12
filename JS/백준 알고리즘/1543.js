[string, doc] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
let answer = 0;
let repalce = string.replaceAll(doc, "$");
// for (let i = 0; i < string.length - doc.length; i++) {}
// console.log(string.slice(0, 3));
for (let i = 0; i < repalce.length; i++) {
  if (repalce[i] == "$") {
    answer += 1;
  }
}
console.log(answer);

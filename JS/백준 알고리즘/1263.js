// 성지키기
/*
문제풀이
= 행과 열로 비교하다가, 둘중 최소로 비어있는 걸 내보내면 될듯?
 */

[test_case, ...matrix] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const [row, col] = test_case.split(" ").map((e) => Number(e));
let answerRow = [];
let answerCol = 0;

for (let i = 0; i < row; i++) {
  matrixRow = matrix[i];
  let idx = 0;
  for (v of matrixRow) {
    if (v == "X" && !answerRow.includes(idx)) answerRow.push(idx);
    idx++;
  }
  if (!matrixRow.includes("X")) {
    answerCol += 1;
  }
}

console.log(answerCol, answerRow, matrix);
console.log(Math.max(answerCol, col - answerRow.length));

// 10026 : 적록색약
/**
 * 적록색약 인경우 =>  빨간색을 > 초록색으로 바꾼다
 *
 * BFS를 통해 문제를 푸는데, 매개변수를 인자로 받아서, 해당 인자가 맞는 경우에만 BFS를 진행할 수 있게 하자 (예전에 0,1로 했었는데 이부분은 색으로 변경)
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "./dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const readRGB = (arr) => {
  let count = 0;
  arr.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      r = rowIdx;
      c = colIdx;
      //   console.log(rowIdx, colIdx, r, c);
      if (col === "R" || col === "G" || col === "B") {
        mainColor = col;
        queue = [];
        queue.push([r, c]);
        while (queue.length > 0) {
          [r, c] = queue.shift();
          if (arr[r][c] === mainColor) {
            arr[r][c] = "X";
            if (r - 1 >= 0) {
              queue.push([r - 1, c]);
            }
            if (r + 1 < N) {
              queue.push([r + 1, c]);
            }
            if (c - 1 >= 0) {
              queue.push([r, c - 1]);
            }
            if (c + 1 < N) {
              queue.push([r, c + 1]);
            }
          }
        }

        count++;
      }
    });
  });

  return count;
};

const solution = (N, arr) => {
  canRed = arr.map((el) => el.split(""));
  cantRed = arr.map((el) => el.replaceAll("R", "G")).map((el) => el.split(""));

  const answer = [];

  answer.push(readRGB(canRed));
  answer.push(readRGB(cantRed));

  return answer.join(" ");
};
console.log(solution(N, arr));

// 1074 : Z
/**
 * 즉 이문제의 핵심은 왼쪽 위에서 4번 흘러 가는것이다(z 모양으로)
 * 그렇다면 2*n을 /2를 해가면서 해당 r,c가 몇사분면에 있는지 찾고, 2*2가 되었을때 몇번째인지 알면 된다, 사분면의 시작 범위를 구해줘야하는데, 1사분면은 2*N/2^0, 2사분면은 (2*^N/2)*1, 3사분면은 (2*^N/2)*2, 4사분면은 (2*^N/2)*3 이런식으로 해줘야한다
 *
 */
[testCase, col, row] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
start = 0;
const makeZ = (start, n, col, row) => {
  if (n == 1) {
    if (col == 1 && row == 1) {
      return console.log(start + 3);
    }
    if (col === 0 && row === 1) {
      return console.log(start + 1);
    }
    if (col === 1 && row === 0) {
      return console.log(start + 2);
    }
    if (col === 0 && row === 0) {
      return console.log(start + 0);
    }
  }
  // 1사분면
  if (2 ** n / 2 > col && 2 ** n / 2 > row) {
    // console.log("1사분면", 2 ** n / 2);
    start += (2 ** (n - 1)) ** 2 * 0;
    return makeZ(start, n - 1, col, row);
  }

  // 2사분면
  if (2 ** n / 2 > col && 2 ** n / 2 <= row) {
    // console.log("2사분면");
    start += (2 ** (n - 1)) ** 2 * 1;
    return makeZ(start, n - 1, col, row - 2 ** n / 2);
  }

  // 3사분면
  if (2 ** n / 2 <= col && 2 ** n / 2 > row) {
    // console.log("3사분면");
    start += (2 ** (n - 1)) ** 2 * 2;
    return makeZ(start, n - 1, col - 2 ** n / 2, row);
  }

  // 4사분면
  if (2 ** n / 2 <= col && 2 ** n / 2 <= row) {
    // console.log("4사분면");
    start += (2 ** (n - 1)) ** 2 * 3;
    return makeZ(start, n - 1, col - 2 ** n / 2, row - 2 ** n / 2);
  }
};

makeZ(start, testCase, col, row);

[NMK, ...stikers] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = NMK.split(" ").map(Number);
let stikerArr = [];

while (stikers.length > 0) {
  let [R, C] = stikers.shift().split(" ").map(Number);

  let stiker = [];
  for (let i = 0; i < R; i++) {
    stiker.push(stikers.shift().split(" ").map(Number));
  }

  stikerArr.push(stiker);
}

let paperArr = [];

for (let k = 0; k < K; k++) {
  let paper = new Array(12).fill(0).map(() => new Array(12).fill(0));

  let [R, C] = [stikerArr[k].length, stikerArr[k][0].length];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      paper[i][j] = stikerArr[k][i][j];
    }
  }

  paperArr.push(paper);
}

const noteBook = new Array(N).fill(0).map(() => new Array(M).fill(0));

const possible = (x, y, stiker) => {
  let [R, C] = [stiker.length, stiker[0].length];

  console.log(x, y, stiker);

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (noteBook[x + i][y + j] === 1 && stiker[i][j] === 1) return false;
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (stiker[i][j] === 1) {
        noteBook[x + i][y + j] = 1;
      }
    }
  }

  return true;
};

const rotationStiker = (stiker) => {
  let [R, C] = [stiker.length, stiker[0].length];
  let newStiker = new Array(12).fill(0).map(() => new Array(12).fill(0));

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      newStiker[j][R - i - 1] = stiker[i][j];
    }
  }

  return newStiker;
};

for (let k = 0; k < K; k++) {
  let stiker = paperArr[k];
  let [R, C] = [stiker.length, stiker[0].length];

  //   console.log("다음", k, "번째 스티커");
  //   console.log("noteBook", noteBook);

  for (let i = 0; i < 4; i++) {
    // 4번 회전
    let flag = false;
    for (let x = 0; x <= N - R; x++) {
      if (flag) break;
      for (let y = 0; y <= M - C; y++) {
        if (possible(x, y, stiker)) {
          flag = true;
          break;
        }
      }
    }

    if (flag) break;

    stiker = rotationStiker(stiker);
    // console.log("회전", stiker);
  }
}

console.log("noteBook", noteBook);

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (noteBook[i][j] === 1) answer++;
  }
}

console.log(answer);

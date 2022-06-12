// 1780 : 종이의 개수
/**
 *  9칸씩 잘리는 N*N 종이가 있다, 여기서 조건에 만족하지 않으면 9칸으로 자름
 *  조건에 맞을떄까지 재귀를 돌리면된다.
 */

[N, ...paper] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

paper = paper.map((v) => v.split(" "));

let paperCount = {
  "-1": 0,
  0: 0,
  1: 0,
};

const recucive = (paper, N) => {
  if (N === 1) {
    return paperCount[paper[0][0]]++;
  }

  if (paper.map((el) => el.every((v) => v === paper[0][0])).every((v) => v)) {
    return paperCount[paper[0][0]]++;
  }
  N = N / 3; // 3
  recucive(
    paper.slice(0, N).map((el) => el.slice(0, N)),
    N
  );
  recucive(
    paper.slice(N, N * 2).map((el) => el.slice(0, N)),
    N
  );
  recucive(
    paper.slice(N * 2, N * 3).map((el) => el.slice(0, N)),
    N
  );

  recucive(
    paper.slice(0, N).map((el) => el.slice(N, N * 2)),
    N
  );
  recucive(
    paper.slice(N, N * 2).map((el) => el.slice(N, N * 2)),
    N
  );
  recucive(
    paper.slice(N * 2, N * 3).map((el) => el.slice(N, N * 2)),
    N
  );

  recucive(
    paper.slice(0, N).map((el) => el.slice(N * 2, N * 3)),
    N
  );
  recucive(
    paper.slice(N, N * 2).map((el) => el.slice(N * 2, N * 3)),
    N
  );
  recucive(
    paper.slice(N * 2, N * 3).map((el) => el.slice(N * 2, N * 3)),
    N
  );
};

recucive(paper, N);

console.log(paperCount[-1] + "\n" + paperCount[0] + "\n" + paperCount[1]);

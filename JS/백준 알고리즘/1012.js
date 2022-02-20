// 유기농 배추
/*
2차원 배열을 만들어 (가로, 세로)
모두 True로 해준다
1이 있다면 해당 배열을 False로 만들어주고
DFS를 돌려, 방문을 하면 True를 해준다

즉 2차원 배열을 돌면서 False가 있으면 DFS를 돌리고
없으면 지나감
DFS를 돌릴때마다 +1을 해주면 배추 지렁이의 마리수를 출력함
*/

input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");

let testCase = input.shift();
let newinput = input.map((el) => el.split(" "));
let answer = 0;
let answerList = [];

const BFS = (visited, col, row, maxRow, maxCol) => {
  if (!visited[col][row]) {
    return;
  }
  visited[col][row] = false;
  {
    // 왼쪽
    if (0 <= row - 1 && row - 1 < maxRow && visited[col][row - 1]) {
      BFS(visited, col, row - 1, maxRow, maxCol);
    }
    // 오른쪽
    if (0 <= row + 1 && row + 1 < maxRow && visited[col][row + 1]) {
      BFS(visited, col, row + 1, maxRow, maxCol);
    }
    // 위쪽
    if (0 <= col - 1 && col - 1 < maxCol && visited[col - 1][row]) {
      BFS(visited, col - 1, row, maxRow, maxCol);
    }
    // 아래쪽
    if (0 <= col + 1 && col + 1 < maxCol && visited[col + 1][row]) {
      BFS(visited, col + 1, row, maxRow, maxCol);
    }
  }
};

for (let i = 0; i < newinput.length; i++) {
  if (newinput[i].length == 3) {
    answer = 0;
    [row, col] = newinput[i].map(Number);
    fromArr = newinput.splice(i + 1, newinput[i][2]);
    fromArr = fromArr.sort((a, b) => a[0] - b[0]);
    // console.log(col, row);
    maxRow = row;
    maxCol = col;
    visited = Array.from(Array(col), () => new Array(row).fill(false));
    // console.log(visited);

    for (let j = 0; j < fromArr.length; j++) {
      [r, c] = fromArr[j];
      //   console.log(r, c);
      visited[c][r] = true;
    }
    // 여기까지 정ㅏㅇ
    // console.log(visited);
    for (let c_c = 0; c_c < col; c_c++) {
      for (let c_r = 0; c_r < row; c_r++) {
        if (visited[c_c][c_r]) {
          BFS(visited, c_c, c_r, maxRow, maxCol);

          answer++;
          // console.log(visited, answer);
        }
      }
    }
  }
  // console.log(answerList);
  console.log(answer);
  // answerList.push(answer);
}

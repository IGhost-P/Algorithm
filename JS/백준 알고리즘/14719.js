// 14719
/* 

첫째줄로 2차원 배열을 만들고
둘쨰 줄로 해당 위치를 true로 만들자
그리고 돌면서 처음 true가 나온곳과 다음 true가 나온 차이를 구해서
전부다 돌면 구해질듯하다

*/

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
const [col, row] = testCase.shift().split(" ").map(Number);

const arr = testCase[0].split(" ").map(Number);

dimension = Array.from(Array(col), () => Array(row + 1).fill(false));

arr.map((el, idx) => {
  for (let i = 0; i < el; i++) {
    dimension[i][idx + 1] = true;
  }
});

let answer = 0;
let prv = 0;

for (let i = 0; i < col; i++) {
  let betweenTrue = [];
  for (let j = 1; j <= row; j++) {
    if (dimension[i][j]) {
      betweenTrue.push(j);
      if (betweenTrue.length == 2 && betweenTrue[1] - betweenTrue[0] == 1) {
        betweenTrue.shift();
      }
    }

    if (betweenTrue.length == 2) {
      console.log(betweenTrue, i, j);
      answer += betweenTrue[1] - betweenTrue[0] - 1;
      betweenTrue.shift();
    }
  }
}
console.log(answer);
// 26분

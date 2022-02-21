// 거의 최단 경로
/* 
최단 경로에 포함되어 있지 않은 경로로 최단 경로
=> 최단 경로가 된 애들을 빼고 다시 돌리면 될것 같습니다
1번째줄 = [장소수, 도로수]
2번째 줄 = [시작점, 출발점]
3번째 줄부터는 계속
... 다음 .length가 2번째 이면 다시 시작
*/

input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));
len = input.length;
console.log(input);
function solutuion() {
  for (let i = 0; i < len; i++) {
    if (input[i].length === 3) [node, road] = input[i].map(Number);
  }
}

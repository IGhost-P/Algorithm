// 15683 : 감시
/**
 * 번호대로 감시할수 있는 수가 정해지는데, 방향을 90도 방향으로 바꿔서 확인할 수 있다.
 * 방향을 바꾸는건 90도를 도는것은 ? => 중심으로  a,b => -b,a 가 되는것
 * 예시를 들어보자면
 *
 * sudo code :
 * 1. cctv 만큼 클래스를 정의
 * 2. map을 만드는 함수 정의
 * 3. cctv 한대당 for문으로 bfs를 돌린다
 * 4. #을 체크하는 함수를 만들어, 가장 큰수가 answer
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
N = parseInt(N);
arr = arr.map((el) => el.split(" ").map((el) => parseInt(el)));

console.log(N, arr);

const findCamera = (map, cctv) => {
  
  for(let i  = 0 ; i < map.length ; i++){
    for(let j = 0 ; j < map[0].length ; j++){
      if(map[i][j] > 0){
        return [i, j];
      }
    }
  }
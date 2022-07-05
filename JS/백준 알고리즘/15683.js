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

class cctv {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  rotate() {
    let temp = this.dx;
    this.dx = -this.dy;
    this.dy = temp;
  }
}
// rotate를 하고 bfs를 돌리낟
const bfs = (map, cctv) => {
    let answer = 0;
    let queue = [];
    queue.push([cctv.x, cctv.y]);
    while (queue.length) {
        let [x, y] = queue.shift();
        
        if()
    }
    return answer;
}
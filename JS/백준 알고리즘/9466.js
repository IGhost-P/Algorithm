// 9466 : 텀 프로젝트
/**
 * 이것도 2차원 배열을 이용해서?
 * 자신이 선택되었는지 안되었는지 확인하면 될것 같은데[
 * 즉, 사이클이 생성이 된다면 => 팀
 * 생성이 되지 않는다 => 팀에 속해있지 않음
 *
 * 싸이클을 만들려면? => BFS를 이용해서, 탐색을 나감=>
 * 
    1	2	3	4	5	6	7
    3	1	3	7	3	4	6
    이라 할때, 1->3->3 서로 싸이클 안맞음 =>
    2->1-> 이미 방문 => 싸이클 안맞은거 확인 ㅅㄱ(2차원 배열로)
    이런식으로 진행하면 될것 같다
 */

[T, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const isVisited = Array(99999);

for (let n = 0; n < T; n++) {
  N = +testCase.shift();
  this.result = [];
  studentList = testCase.shift().split(" ").map(Number);
  studentList.unshift(0);
  isVisited.fill(false);
  isVisited.unshift(true);
  //   console.log(isVisited);

  const dfs = (x) => {
    isVisited[x] = true;
    this.isCircle.push(x);
    student = studentList[x];
    if (isVisited[student]) {
      if (this.isCircle.includes(student)) {
        this.result = [
          ...this.result,
          ...this.isCircle.slice(this.isCircle.indexOf(student)),
        ];
        return;
      }
    } else {
      dfs(student);
    }
  };

  for (let i = 1; i < N + 1; i++) {
    if (!isVisited[i]) {
      this.isCircle = [];
      dfs(i);
    }
  }
  //   console.log(this.result);
  console.log(N - this.result.length);
}

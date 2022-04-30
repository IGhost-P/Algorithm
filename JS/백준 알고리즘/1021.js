// 1021 : 회전하는 큐 : https://www.acmicpc.net/problem/1021
/**
 *  뽑는건 shift
 *  왼쪽걸 오른쪽은 shift를 push
 *  오른쪽걸 왼쪽으로는 push를 unshift로
 *
 *  왼쪽->오른쪽 vs -> 오른쪽->왼쪽 무엇이 빠를가 를 정해야하는데
 *  가운데를 중심으로 왼쪽에 가깝나, 오른쪽에 가깝나를 찾으면 될것 같은데?
 *  왼쪽에 가까우면 해당 인덱스 만큼 answer에 더해주고
 *  오른쪽이라 가까우면 전체 인덱스 - 해당 인덱스 만큼 answer에 더해주고
 *  아.. 하지만 큐가 계속 바뀌니깐 큐를 다시 한번 확인해줘야하는 필요성이 있네
 *
 *  그러면 answer에 더해줄 만큼 연산을 실제로 해줘야 할듯
 *
 *  sudo code:
 *  1. N과 뽑아야하는수 M, 그리고 뽑을 수들을 배열로 받아온다
 *  2. N만큼의 숫자 배열을 만들고 , M만큼 반복문을 돌린다
 *  3. 매 반복할때마다 인덱스 위치를 확인하고 더 가까우면 answer에 더해주고, 그만큼 해당 명령을 수행한다
 *  4. 반복
 */

[NM, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = +NM.split(" ")[0];
M = +NM.split(" ")[1];
arr = arr.split(" ").map(Number);
answer = 0;
numbers = Array.from({ length: N }, (_, idx) => idx + 1);

const leftToRight = (numbers) => {
  numbers.push(numbers.shift());
};

const rightToLeft = (numbers) => {
  numbers.unshift(numbers.pop());
};

for (let i = 0; i < M; i++) {
  target = arr[i];

  while (true) {
    if (numbers[0] === target) {
      numbers.shift();
      break;
    }
    if (numbers.length - numbers.indexOf(target) > numbers.indexOf(target)) {
      leftToRight(numbers);
      answer += 1;
    } else {
      rightToLeft(numbers);
      answer += 1;
    }
  }
}
console.log(answer);

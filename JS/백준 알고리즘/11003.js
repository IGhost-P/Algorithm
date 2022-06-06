// 11003 : 최솟값 찾기
/**
 * A1~ A12 이고 L은 3이다
 * D1 = A1-3+1= A1 ~ A1 중 가장 작은 값 = 1이 됨
 * 점차 이렇게 하다 보면..?
 *
 * sudo code:
 * 1. A와 L을 받는다
 * 2. A의 리스트를 받는다
 * 3. 매번 모든 코드를 돌리면 오래 걸림, 하지만 윈도우 슬라이싱 처럼, L만큼의 구역을 잘라서 가장 작은 값을 구해야한다,
 * 4. 우선 큐를 준비하고, 일단 최소값을 구한다,
 * 5. 지금 들어온 값이 현재 최소값보다 작다면, 해당 값을 최소값으로 한다,
 * 6. 다음 큐를 팝, 푸시 하면서, 팝 == 최소값 or 최소값 < 푸쉬된값이 인경우 각 조건에 따라 바꿔준다
 * 7. 각 최소값을 반환한다
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // 제일 앞 노드
    this.rear = null; // 제일 뒤 노드
    this.length = 0; // 노드의 길이
  }

  enqueue(data) {
    // 노드 추가.
    const node = new Node(data); // data를 가진 node를 만들어준다.
    if (!this.head) {
      // 헤드가 없을 경우 head를 해당 노드로
      this.head = node;
    } else {
      this.rear.next = node; // 아닐 경우 마지막의 다음 노드로
    }
    this.rear = node; // 마지막을 해당 노드로 한다.
    this.length++;
  }

  dequeue() {
    // 노드 삭제.
    if (!this.head) {
      // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
      return false;
    }
    const data = this.head.data; // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
    this.head = this.head.next;
    this.length--;

    return data;
  }
  // head를 반환하는 함수
  front() {
    // head가 있을 경우 head의 data를 반환.
    return this.head && this.head.data;
  }

  back() {
    // rear가 있을 경우 rear의 data를 반환.
    return this.rear && this.rear.data;
  }
  //큐의 모든 원소를 반환하는 함수
  getQueue() {
    if (!this.head) return false;
    let node = this.head;
    const array = [];
    while (node) {
      // node가 없을 때까지 array에 추가한 후 반환해준다.
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}

[first, second] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L] = first.split(" ").map((el) => parseInt(el));
const AList = second.split(" ").map((el) => parseInt(el));

const solution = (AList) => {
  let answer = "";
  const queue = new Queue();
  for (let i = 0; i < AList.length; i++) {
    next = AList[i];
    start = i - L + 1;
    if (start < 0) start = 0;
    queue.enqueue(next);
    if (L < queue.length) {
      queue.dequeue();
    }
    answer += Math.min(...queue.getQueue()) + " ";
    if (i % 10000 === 0) {
      let answer = "";
    }
  }

  return answer;
};

console.log(solution(AList));

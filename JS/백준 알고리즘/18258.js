// 18258 : 큐2
/**
 *
 * 기존 풀이대로 풀면 시간초과가 날것이다
 * 클래스를 만들어서 사용허저
 */

[N, ...methods] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

methods = methods.map((el) => el.split(" "));

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

const queue = new Queue();
const answer = [];

const postQueue = (method) => {
  switch (method[0]) {
    case "push":
      queue.enqueue(method[1]);
      break;
    case "pop":
      answer.push(queue.length ? queue.dequeue() : -1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue.length ? 0 : 1);
      break;
    case "front":
      answer.push(queue.length ? queue.front() : -1);
      break;
    case "back":
      answer.push(queue.length ? queue.back() : -1);
    default:
      break;
  }
};

const solution = (N, methods) => {
  methods.map((method) => {
    postQueue(method);
  });
  return console.log(answer.join("\n"));
};

solution(N, methods);

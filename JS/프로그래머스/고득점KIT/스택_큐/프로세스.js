/**
 *
 * 프로세스와 우선순위 합치기

 * 기능
 * 1. 큐 꺼내기
 * 2. 우선순위 높은 프로세스 확인하기
 * 3. 우선순위 높은 프로세스가 있으면 큐 맨 뒤로 보내기
 * 4. 뽑아도 될때 원하는 location의 프로세스이면 카운터값 리턴
 */

const zip = (a, b) =>
	Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);

const checkPriority = (front, queue) => {
	const [frontPriority, _] = front;

	for (let i = 0; i < queue.length; i++) {
		const [priority, _] = queue[i];
		if (frontPriority < priority) {
			return false;
		}
	}
	return true;
};

function solution(priorities, location) {
	var answer = 0;

	const queue = zip(
		priorities,
		priorities.map((_, i) => i)
	);

	while (queue.length > 0) {
		const front = queue.shift();
		if (checkPriority(front, queue)) {
			answer++;
			const [priority, idx] = front;
			if (idx === location) {
				return answer;
			}
		} else {
			queue.push(front);
		}
	}

	return answer;
}

// test
const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

console.log(solution(priorities, location));

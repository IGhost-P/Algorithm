/**
 * 호텔 대실
 * 스택으로 문제를 풀어보자
 * 1. 예약순서를 정렬한다, (시작시간이 빠른 순서대로)
 * 2. 예약이 들어오면 스택에 넣는다
 * 3. 다음 예약이 들어오면 현재 가장 위에 있는 예약과 비교한다
 *  3-1. 현재 가장 위에 있는 예약이 끝나는 시간이 다음 예약이 시작하는 시간보다 빠르면, 스택에서 빼낸다
 *  3-2. 현재 가장 위에 있는 예약이 끝나는 시간이 다음 예약이 시작하는 시간보다 늦으면, 스택에 넣는다
 * 4. 스택이 길이가 가장 긴 것이 답이다
 */

const TimeToNumber = (time, cleanTime = 0) => {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute) + cleanTime;
};

function solution(book_time) {
  let max = 1;
  const stack = [];
  book_time.sort((a, b) => TimeToNumber(a[0]) - TimeToNumber(b[0]));
  stack.push(book_time[0]);

  for (let i = 1; i < book_time.length; i++) {
    const [topStart, topEnd] = stack[stack.length - 1];
    const [nextStart, nextEnd] = book_time[i];

    const topEndTime = TimeToNumber(topEnd, 10);
    const nextStartTime = TimeToNumber(nextStart);

    if (topEndTime <= nextStartTime) {
      stack.pop();
    }
    stack.push(book_time[i]);
    stack.sort((a, b) => TimeToNumber(b[1]) - TimeToNumber(a[1]));
    max = Math.max(max, stack.length);
  }
  return max;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
); // 3

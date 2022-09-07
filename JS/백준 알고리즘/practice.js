function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    const arr = new Array(i).fill(0).map((v, i) => i + 1);
    const measureArrLen = arr.filter((v) => i % v === 0).length;

    if (measureArrLen % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
console.log(solution(13, 17));

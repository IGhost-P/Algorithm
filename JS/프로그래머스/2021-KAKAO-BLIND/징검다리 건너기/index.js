function solution(stones, k) {
  var answer = 0;
  let left = 1;
  let right = 200000000;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let count = 0;
    let flag = false;
    for (let i = 0; i < stones.length; i++) {
      console.log(stones, mid);
      if (stones[i] - mid <= 0) {
        count++;
        if (count >= k) {
          flag = true;
          break;
        }
      } else {
        count = 0;
      }
    }
    if (flag) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = mid;
    }
  }
  return answer + 1;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));

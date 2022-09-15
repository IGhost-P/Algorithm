function solution(numbers, target) {
  var answer = 0;
  let twoLen = 2 ** numbers.length;
  for (let i = 0; i < twoLen; i++) {
    let two = i.toString(2).padStart(numbers.length, "0");
    let twoArr = two.split("");
    let sum = 0;
    for (let j = 0; j < twoArr.length; j++) {
      if (twoArr[j] == 0) {
        sum += numbers[j];
      } else {
        sum -= numbers[j];
      }
    }
    if (sum == target) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));

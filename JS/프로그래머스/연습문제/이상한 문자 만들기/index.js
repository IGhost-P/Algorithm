function solution(s) {
  var answer = "";
  const arr = s.split("");
  let count = 0;
  arr.forEach((v) => {
    if (v === " ") {
      count = 0;
      answer += v;
    } else {
      if (count % 2 === 0) {
        answer += v.toUpperCase();
      } else {
        answer += v.toLowerCase();
      }
      count++;
    }
  });
  return answer;
}

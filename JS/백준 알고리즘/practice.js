function solution(s) {
  var answer = 0;
  s = [...s];
  number = 1;
  while (s.length >= number) {
    if (s[number - 1] == s[number]) {
      s.splice(number - 1, 2);
      number = 1;
    } else {
      number++;
    }
  }
  if (s.length == 0) {
    return (answer = 1);
  }
  return answer;
}

console.log(solution("bcbc"));

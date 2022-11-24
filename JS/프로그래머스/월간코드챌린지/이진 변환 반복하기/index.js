function solution(s) {
  var answer = [];
  let zeroCount = 1;
  let level = 1;
  while (true) {
    let x = [...s].filter((el) => el == 1);
    let c = x.length;
    let two = c.toString(2);

    console.log(two);
    if ([...two].filter((el) => el == 0).length === 0) {
      return [level, zeroCount];
    }
    zeroCount += s.length - c;
    s = two;
    level++;
  }
}

console.log(solution("110010101001"));

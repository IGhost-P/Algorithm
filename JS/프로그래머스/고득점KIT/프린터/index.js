function solution(priorities, location) {
  var answer = 0;
  let count = 0;

  priorities = priorities.map((el, idx) => [el, idx]);

  while (priorities.length > 0) {
    const temp = priorities.shift();

    if (temp[0] >= Math.max(...priorities.map((el) => el[0]))) {
      count++;
      if (temp[1] == location) {
        return count;
      }
      continue;
    }

    priorities.push(temp);
  }
  return answer;
}

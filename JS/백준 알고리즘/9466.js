const [tc, ...data] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const isVisited = Array(100000);
const done = Array(100000);

const solution = (index, puplis) => {
  isVisited[index] = 1;
  const next = puplis[index] - 1;
  let cnt = 0;

  if (!isVisited[next]) {
    cnt += solution(next, puplis);
  } else if (!done[next]) {
    cnt += 1;
    for (let i = next; i !== index; i = puplis[i] - 1) {
      cnt += 1;
    }
  }
  done[index] = 1;

  return cnt;
};

let res = "";
for (let i = 0; i < data.length; i += 2) {
  isVisited.fill(0);
  done.fill(0);

  const n = +data[i],
    puplis = data[i + 1].split(" ").map(Number);
  let total = n;
  for (let j = 0; j < n; j += 1) {
    if (!isVisited[j]) total -= solution(j, puplis);
  }
  res += total + "\n";
}
console.log(res);

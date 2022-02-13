[testCase, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
dict = {};

for (let i = 0; i < testCase; i++) {
  if (dict[arr[i]]) dict[arr[i]] += 1;
  else dict[arr[i]] = 1;
}
let new_dict = Object.entries(dict).sort((a, b) => b[1] - a[1]);

let new_dict_v = new_dict.map((v) => v[1]);
let max = Math.max(...new_dict_v);

let answer = [];
new_dict.map((v) => {
  if (v[1] == max) {
    answer.push(v[0]);
  }
});
console.log(answer.sort()[0]);

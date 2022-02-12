[fri_in, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
fri_li = fri_in.trim().split(" ");
let target = fri_li[1];
arr = arr[0].split(" ").map((el) => parseInt(el));

console.log(arr.sort((a, b) => a - b)[target - 1]);

// const mergeSort = (arr) => {
//   if (arr.length === 1) {
//     return arr;
//   }

//   const mid = Math.ceil(arr.length / 2);

//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// };

// const merge = (left, right) => {
//   const sortedArr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }
//   return [...sortedArr, ...left, ...right];
// };

// console.log(mergeSort(arr)[target - 1]);

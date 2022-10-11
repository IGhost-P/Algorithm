[NQ, arr, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, Q] = NQ.split(" ").map(Number);
const tree = new Set();
arr.split(" ").forEach((v, i) => {
  if (v > 0) tree.add(i + 1);
});

console.log(tree);
console.log(tree.add(1));
console.log((tree[1] = 3));
console.log(tree);

// let currentIdx = 0;

// for (let i = 0; i < Q; i++) {
//   const [command, ...args] = testCase[i].split(" ").map(Number);

//   if (command === 1) {
//     const [idx] = args;
//     if (tree[idx - 1] === 1) {
//       tree[idx - 1] = 0;
//     } else {
//       tree[idx - 1] = 1;
//     }
//     continue;
//   }

//   if (command === 2) {
//     currentIdx = (args[0] + currentIdx) % N;
//     continue;
//   }

//   if (command === 3) {
//     let tempArr = tree.slice(currentIdx);
//     let findIdx = tempArr.indexOf(1);
//     if (findIdx === -1) {
//       temppArr = tree.slice(0, currentIdx);
//       findIdx = tempArr.indexOf(1);
//     }

//     if (findIdx === -1) {
//       console.log(-1);
//     } else {
//       console.log(findIdx);
//     }
//   }
// }

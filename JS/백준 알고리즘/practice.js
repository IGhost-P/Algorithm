// n = 5;
// function getMaxBarrier(initialEnergy, th) {
//   // Write your code here
//   let answer;
//   let max = 0;
//   while (true) {
//     answer = 0;

//     for (let i = 0; i < n; i++) {
//       if (initialEnergy[i] - 1 >= 0) {
//         initialEnergy[i] = initialEnergy[i] - 1;
//       } else {
//         initialEnergy[i] = 0;
//       }
//     }
//     answer = initialEnergy.reduce((acc, cur) => acc + cur);
//     if (answer <= th) {
//       return max;
//     }
//     max++;
//   }
// }

// // Initial energy: 10
// // Thresholds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // Expected output: 10
// console.log(getMaxBarrier([4, 8, 7, 1, 2], 9));

// function findPoint(lines) {
//   // Write your code here
//   let xMax = -Infinity;
//   let yMax = -Infinity;
//   // 0이 세로
//   // 1이 가로
//   const linesRowAndCol = lines.map((line) => {
//     const [x1, y1, x2, y2] = line;
//     xMax = Math.max(xMax, x2);
//     yMax = Math.max(yMax, y2);

//     if (x1 === x2) {
//       return 0;
//     }

//     if (y1 === y2) {
//       return 1;
//     }
//   });

//   const metrix = Array.from(Array(yMax + 1), () =>
//     Array(xMax + 1).fill(-Infinity)
//   );

//   for (let i = 0; i <= yMax; i++) {
//     for (let j = 0; j <= xMax; j++) {
//       let answer = 0;
//       let flag = false;
//       for (let l = 0; l < lines.length; l++) {
//         const [x1, y1, x2, y2] = lines[l];

//         if (linesRowAndCol[l] === 0) {
//           if (y2 > y1 ? y1 > i || i > y2 : y2 > i || i > y1) {
//             flag = true;
//             break;
//           }
//         }

//         if (linesRowAndCol[l] === 1) {
//           if (x2 > x1 ? x1 > j || j > x2 : x2 > j || j > x1) {
//             flag = true;
//             break;
//           }
//         }

//         if (linesRowAndCol[l] === 0 && !flag) {
//           answer += Math.abs(x1 - j);
//         } else if (linesRowAndCol[l] === 1 && !flag) {
//           answer += Math.abs(y1 - i);
//         }
//       }
//       if (!flag) metrix[i][j] = answer;
//     }
//   }

//   console.log(metrix);

//   let min = Infinity;
//   let answer;
//   for (let i = 0; i < metrix.length; i++) {
//     for (let j = 0; j < metrix[i].length; j++) {
//       if (metrix[i][j] !== -Infinity) {
//         min = Math.min(min, metrix[i][j]);
//       }
//     }
//   }

//   for (let i = 0; i < metrix.length; i++) {
//     for (let j = 0; j < metrix[i].length; j++) {
//       if (metrix[i][j] === min) {
//         return [j, i].join("\n");
//       }
//     }
//   }
// }

// console.log(
//   findPoint([
//     [2, 4, 2, 0],
//     [2, 1, 0, 1],
//     [4, 3, 4, 4],
//     [5, 5, 4, 5],
//   ])
// );

// function getMaxSumOfArray(arr1, arr2) {
//   // Write your code here
//   let arr = arr1;
//   let r = arr1.length;
//   let result = new Array(r).fill(0);
//   const checked = new Array(arr.length).fill(false);

//   let answerList = [];

//   const dfsPermutaion = (level) => {
//     if (level == r) {
//       // 만족하면 출력
//       answerList.push([...result]);
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (checked[i]) continue;
//       result[level] = arr[i];
//       checked[i] = true; // 결과값으로 쓰였으면 true
//       dfsPermutaion(level + 1); // 해당 재귀가 끝나면
//       checked[i] = false; // 해당 재귀를 호출한 부모 노드도 다시 true로
//     }
//   };

//   dfsPermutaion(0);
//   let answerList1 = [...answerList];
//   arr = arr2;
//   answerList = [];

//   dfsPermutaion(0);
//   let answerList2 = [...answerList];

//   answerList = [];

//   // console.log(answerList1, answerList2);

//   for (let i = 0; i < answerList1.length; i++) {
//     for (let j = 0; j < answerList2.length; j++) {
//       let sum = 0;
//       // console.log(answerList1[i], answerList2[j]);
//       for (let k = 0; k < answerList1[i].length; k++) {
//         sum += (k + 1) * (answerList2[i][k] - answerList1[j][k]);
//       }
//       answerList.push(sum);
//     }
//   }

//   return Math.max(...answerList);
// }

// console.log(getMaxSumOfArray([1, 2, 3], [10, 10, 10]));

function getOptimalString(s) {
  // Write your code here
  let arr = [...s];
  let r = arr.length;
  let max = -Infinity;
  for (let i = 1; i <= r; i++) {
    let b = [];

    let j = i - 1;
    while (b.length < r) {
      console.log(j);
      b.push(arr.at(j));
      b.reverse();
      j++;
    }
    console.log(b);
    console.log(b.join(""));
    max = Math.max(max, b.join(""));
  }

  return max;
}

console.log(getOptimalString("1100"));

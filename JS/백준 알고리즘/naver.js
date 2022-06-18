// "use strict";

// /* global CustomError, getLikedBrands, getTopBrandsForGender */

// function solution(U, N) {
//   return new Promise((resolve, reject) => {
//     // Resolve the promise with the result

//     getLikedBrands(U.id).then((likedBrands) => {
//       return getTopBrandsForGender.then((topBrands) => {
//         const result = [];
//         for (let i = 0; i < N; i++) {
//           const topBrand = topBrands[i];
//           if (likedBrands.includes(topBrand)) {
//             result.push(topBrand);
//           }
//         }
//         resolve(result);
//       });
//     });
//   });
// }

// solution({ id: 1 }, 3)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// A = [5, 3, 6, 1, 3];
// K = 2;
// answer = 999999;
// function solution(A, K) {
//   // write your code in JavaScript (Node.js 8.9.4)\
//   for (let i = 0; i < A.length; i++) {
//     temp = [...A];
//     temp.splice(i, K);
//     max = Math.max(...temp);
//     min = Math.min(...temp);
//     // console.log(max - min, temp);
//     if (answer > max - min) answer = max - min;
//   }
// }

// solution(A, K);
// console.log(answer);

function solution(A) {
  var n = A.length;
  var i = n - 1;
  var result = -1;
  var maximal = 0,
    k = 0;
  while (i > 0) {
    if (A[i] == 1) {
      k = k + 1;
      if (k >= maximal) {
        maximal = k;
        result = i;
      }
    } else k = 0;
    i = i - 1;
  }
  if (A[i] == 1 && k + 1 > maximal) result = 0;
  return result;
}

const findMaximalIndex = (A) => {
  let n = A.length;
  let i = n - 1;
  let result = -1;
  let maximal = 0,
    k = 0;
  while (i > 0) {
    if (A[i] == 1) {
      k = k + 1;
      if (k >= maximal) {
        maximal = k;
        result = i;
      }
    } else k = 0;
    i = i - 1;
  }
  if (A[i] == 1 && k + 1 > maximal) result = 0;
  return result;
};

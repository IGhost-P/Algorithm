// const exclude = ",";

// const makeHtml = (text, keyword) => {
//   let html = "";
//   let keyLen = keyword.length;
//   const textLen = text.length;
//   let endIdx = 0;
//   let flag = false;
//   let temp = "";

//   for (let i = 0; i < textLen; i++) {
//     if (text[i] === keyword[0]) {
//       for (let j = 0; j < keyLen; j++) {
//         temp += text[i + j];

//         if (text[i + j] === exclude) {
//           keyLen++;
//         }
//       }
//       if (temp.replace(exclude, "") === keyword) {
//         html += "<mark>";
//         endIdx = i + keyLen;
//         flag = true;
//       }
//     }

//     // if (flag && text[i] === exclude) {
//     //   endIdx += 1;
//     // }

//     if (flag && endIdx === i) {
//       html += "</mark>";
//     }

//     html += text[i];
//   }
//   return html;
// };

// function solution(text, keyword) {
//   temp = text.split("원,");
//   console.log(temp);
// }

// console.log(solution("커피 3,500원, 샌드위치 2,350원", "350"));
// // console.log(solution("샌드위치 2,350원", "350"));

const chekcNum = (num) => {
  count = 0;
  for (let i = 0; i < num.length - 1; i++) {
    if (Number(num[i]) + 1 == num[i + 1]) count++;
  }

  if (count >= 3) return true;

  return false;
};

const reChekcNum = (num) => {
  count = 0;
  for (let i = 0; i < num.length - 1; i++) {
    if (Number(num[i]) - 1 == num[i + 1]) count++;
  }

  if (count >= 3) return true;

  return false;
};

function solution(pin) {
  var answer = true;
  let chars = /(\d){3,}/;

  if (chekcNum([...pin])) {
    answer = false;
  }

  //   console.log(answer);

  let reserveStr = [...pin].reverse();
  if (reChekcNum(reserveStr)) {
    answer = false;
  }

  let samefrist = pin[0];
  let sameArr = [...pin];
  let result = sameArr.every((el) => {
    return el === samefrist;
  });

  if (result) {
    answer = false;
  }


  return answer;
}

console.log(solution("1398"));

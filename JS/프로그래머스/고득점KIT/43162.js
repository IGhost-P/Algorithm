const isPrimeNumber = (num) => {
  if (num == 1) return false;
  if (num == 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
};

function solution(n, k) {
  var answer = -1;
  let num = n.toString(k);
  let numArr = num.split("0");
  let target = "";

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] != "") {
      target += numArr[i] + " ";
    }
  }
  target = target.trim();
  let targetArr = target.split(" ");
  let count = 0;
  //   console.log(targetArr);
  for (let i = 0; i < targetArr.length; i++) {
    // console.log(isPrimeNumber(parseInt(targetArr[i])), parseInt(targetArr[i]));
    if (isPrimeNumber(parseInt(targetArr[i]))) {
      count++;
    }
  }
  answer = count;
  return answer;
}
console.log(solution(437674, 3));

// 약수로 계속 나누어서 서로소가 나올떄까지 구하고 서로소를 구한다

// 약수 확인 함수

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  let r;
  while (b != 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function solution(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    while (stack.length >= 2) {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(lcm(a, b));
    }
  }

  return stack[0];
}

console.log(solution([2, 6, 8, 14]));

// const a = 10;
// const b = a;
// console.log(a === b); // call by value

const a = [1, 2, 3]; // 주소
// const b = a; // 얕은 복사 = 주소값만 복사
const b = [...a];

b[0] = 100;
// console.log(a === b); // call by reference
// 깊은복사를 위한 방법
1. immer 라이브러리 사용하기 => react 에서 사용, RTK 기본적으로 제공해줌(loadsh)
2. 반복문 
3. JSON.parse(JSON.stringify(객체))
console.log(a === b);

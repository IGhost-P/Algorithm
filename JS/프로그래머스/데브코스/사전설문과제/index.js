// function RockBand(members) {
//     this.members = members;
//     this.perform = function () {
//       setTimeout(function(){
//         this.members.forEach(function (member) {
//           member.perform();
//         });
//       }, 1000);
//     };
//   }

// function RockBand(members) {
//   this.members = members;
//   this.perform = function () {
//     setTimeout(() => {
//       this.members.forEach(function (member) {
//         member.perform();
//       });
//     }, 1000);
//   };
// }

// var theOralCigarettes = new RockBand([
//   {
//     name: "이혁",
//     perform: function () {
//       console.log("이혁이 기타를 연주합니다.");
//     },
//   },
//   {
//     name: "김현",
//     perform: function () {
//       console.log("김현이 베이스를 연주합니다.");
//     },
//   },
// ]);

// theOralCigarettes.perform();

// 발생하는 오류 : TypeError: Cannot read properties of undefined (reading 'forEach')

// 발생하는 이유 : 일반함수에서 this호출은 전역 객체 또는 undefind를 반환한다.

// 해결하는 방법 : 일반함수로 this를 호출하지 말고, 화살표 함수로 호출을 한다

// 해결되는 이유 : 화살표 함수에는 this가 없다. 그렇기 때문에 this를 찾기 위해 자신이 선언된 상위 스코프의 this를 따르기 때문이다

// ```js
// function RockBand(members) {
//   this.members = members;
//   this.perform = function () {
//     setTimeout(() => {
//       this.members.forEach(function (member) {
//         member.perform();
//       });
//     }, 1000);
//   };
// }
// ```

// const numbers = [0, 1, 2, 3, 4];

// for (var i = 0; i < numbers.length; i++) {
//   //   setTimeout(() => {
//   //     console.log(numbers[i]);
//   //   }, i * 1000);
//   // 클로저 이용
//   setTimeout(
//     (function (j) {
//       return function () {
//         console.log(numbers[j]);
//       };
//     })(i),
//     i * 1000
//   );
// }

// console.log(i);
// console.log("i: ", numbers[i]);

// (function (name) {
//   console.log(name);
// })("이혁");

// var idiots = {
//   name: "이혁",
//   members: {
//     roto: {
//       memberName: "roto",
//       play: function () {
//         console.log(
//           this.name + "의" + this.memberName + "이 기타를 연주합니다."
//         );
//       },
//     },
//   },
// };

// idiots.members.roto.play();

// const solution = (participant, completion) =>
//   failerName(count(participant), count(completion));

// const failerName = (participant, completion) =>
//   go(
//     participant,
//     entries,
//     find(([name, count]) => (completion[name] || 0) < count),
//     head
//   );

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

const cat = new Cat("냥이", 2);
console.log(cat);

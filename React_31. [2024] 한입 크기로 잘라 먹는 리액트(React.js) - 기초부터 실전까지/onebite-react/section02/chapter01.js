// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // bigInteger

// if (!f1) {
//   console.log("falsy");
// }
// if (!f2) {
//   console.log("falsy");
// }
// if (!f3) {
//   console.log("falsy");
// }
// if (!f4) {
//   console.log("falsy");
// }
// if (!f5) {
//   console.log("falsy");
// }
// if (!f6) {
//   console.log("falsy");
// }
// if (!f7) {
//   console.log("falsy");
// }

// 2. Truthy
// -> 7가지 Falsy 한 값 들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if (t1) {
//   console.log("Truthy");
// }
// if (t2) {
//   console.log("Truthy");
// }
// if (t3) {
//   console.log("Truthy");
// }
// if (t4) {
//   console.log("Truthy");
// }
// if (t5) {
//   console.log("Truthy");
// }

// 3. 활용 사례

function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person;
printName(person);

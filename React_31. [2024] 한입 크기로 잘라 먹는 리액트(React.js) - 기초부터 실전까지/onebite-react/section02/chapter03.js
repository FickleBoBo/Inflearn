// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// let [one, two] = arr;
// let [one, two, three, four] = arr;
let [one, two, three, four = 4] = arr;

// console.log(one, two);
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
// let person = {
//   name: "육민우",
//   age: 27,
//   hobby: "알고리즘",
// };

// let { name, age, hobby } = person;
// console.log(name, age, hobby);

// let person = {
//   name: "육민우",
//   age: 27,
//   hobby: "알고리즘",
// };

// let { name, age, hobby, height = 181 } = person;
// console.log(name, age, hobby, height);

let person = {
  name: "육민우",
  age: 27,
  hobby: "알고리즘",
};

let { name: myName, age, hobby } = person;
console.log(myName, age, hobby);

// 3. 객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, height }) => {
  console.log(name, age, hobby, height);
};

func(person);

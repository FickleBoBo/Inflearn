function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

// 1. 함수 표현식
let varB = function () {
  // 익명 함수(이름을 지어줘도 어차피 이름으로 호출을 못해서 의미없음)
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));

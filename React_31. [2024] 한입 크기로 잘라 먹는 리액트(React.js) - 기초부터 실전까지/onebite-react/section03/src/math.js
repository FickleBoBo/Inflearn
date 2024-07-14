// Math 모듈

// 앞에 export 키워드 붙여서 내보내기도 가능
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// 모듈을 대표하는 기본값
export default function multiply(a, b) {
  return a * b;
}

// module.exports = {
//   add,
//   sub,
// };

export { add, sub };

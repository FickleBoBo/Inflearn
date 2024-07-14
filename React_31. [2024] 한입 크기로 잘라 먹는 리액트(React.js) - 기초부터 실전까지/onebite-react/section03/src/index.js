// const { add, sub } = require("./math");

// 기본값은 이름 바꿔서 부를 수 있고 중괄호 없이 받아야 한다
import mul from "./math.js";

// 구조 분해 할당으로 편하게 받기 가능
import { add, sub } from "./math.js";
// console.log("안녕 Node.js");

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor";
const color = randomColor();
console.log(color);

// 자바스크립트의 데이터 타입은 원시타입과 객체타입으로 나누어짐
// 원시타입은 값 자체가 저장되는 방식 : String, Number, Boolean, Undefined, Null, Symbol, BigInt
// 객체타입은 객체의 메모리 주소를 저장하는 타입: Object, Array, Function 등

// 문자열 : 길이가 16bit(2Byte)인 문자(UTF-16)를 나열한 형태, "", '', ``
let str1 = "안녕하세요. 자바스크립트입니다.";
let str2 = '안녕하세요. "자바스크립트"입니다.';
console.log(str1);
console.log(str2);

let str3 = "문자열과 " + "문자열을 " + "연결할 수 있습니다.";
console.log(str3);

// 템플릿 문자열 : ES6에서 추가된 방식
let gugu = 3;
let dan = 8;
console.log(`${gugu} x ${dan} = ${gugu * dan}`);


// 자바스크립트는 모든 숫자를 하나의 숫자형(Nubmer)으로 취급
// 실수는 부동소수점으로 표현

// 0.01을 100번 더하면 1이 돼야 하는데, 값이 정확히 떨어지지 않음
// 부동소수점의 오류
let x = 0.0;
for (i = 0; i < 100; i++) {
  x += 0.01;
}
console.log(x);

// 새로 추가한 Decimal 패키지 사용하기
// 이렇게 하면 정확하게 1이 찍힘
const Decimal = require("decimal.js")
let y = new Decimal(0.0);
for (i = 0; i < 100; i++) {
  y = y.plus(0.01);
}
console.log(y);


// 논리형 : 참과 거짓의 값만 가지는 타입
let age = 18;
let isAdult = (age > 19) ? true : false;
if (isAdult) console.log("당신은 성인입니다.");
else console.log("당신은 미성년자입니다.");


// undefined : 값이 할당되지 않음 (의도하지 않음)
// 값이 할당되지 않았기 때문에 타입도 알 수 없음
// 파이썬은 let과 같은 키워드가 없기 때문에 이런식으로 나올 수 없고 무조건 오류 출력
// 자바스크립트도 let을 빼면 오류, let을 넣으면 undefined 출력
let empty;
console.log(empty);


// null : 변수나 상수를 선언하고 의도적으로 값을 비워둘 때 사용
let none = null;
console.log(none);
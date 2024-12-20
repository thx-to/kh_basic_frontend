// 형변환 : 묵시적 형변환과 명시적 형변환이 있음

// 묵시적 형변환
// 숫자와 문자열을 결합하면 문자열로 자동 형변환
let num1 = 10 + "10"; // 1010
console.log(num1);

// 명시적 형변환
// 10이라는 문자열을("10") Number타입으로 변환
let num2 = 10 + Number("10"); // 20
console.log(num2);

// 명시적 형변환이 묵시적 형변환이 동시에 일어남
// 10이라는 숫자를 문자열로 바꿔주고(명시), 결과값은 문자열(1010)로 자동형변환(묵시)
let num3 = 10 + String("10"); // 1010
console.log(num3);

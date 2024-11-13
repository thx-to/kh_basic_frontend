// Number 객체 : 숫자와 관련된 작업, 자바스크립트는 정수와 실수를 모두 Number가 처리함
const x = 10;
console.log(typeof x);
const y = 3.14;
console.log(typeof y);

// Number.parseFloat() : 주어진 문자열을 실수로 변환
console.log(Number.parseFloat("12")); // 12
console.log(Number.parseFloat("12.34")); // 12.34
console.log(Number.parseFloat("12문자열")); // 12, Java라면 오류
console.log(Number.parseFloat("12 34 56")); // 12
console.log(Number.parseFloat("문자열 56")); // NaN

// Number.parseInt() : 주어진 문자열을 정수로 변환
console.log(Number.parseInt("12")); // 12
console.log(Number.parseInt("12.34")); // 12
console.log(Number.parseInt("12문자열")); // 12
console.log(Number.parseInt("12 34 56")); // 12
console.log(Number.parseInt("문자열 56")); // NaN
// 자바스크립트는 원시타입을 제외하면 모든 데이터 타입이 객체타입
// 객체타입의 자료형에는 배열, 객체 리터럴(딕셔너리), 함수 등이 있음
// 배열 : 복수의 데이터를 정의할 수 있는 자료형, 인덱스 기반

// 인덱스를 기반으로 값을 찾을 수 있음
let score = [80, 99, 77, 65];
console.log(score[1]);

// 자바스크립트의 배열은 데이터 타입이 달라도 됨
let array = [
  "NewJeans",
  "PHAM",
  20,
  true,
  [99, 88, 60],
  ["KIM", "MO", "KANG", "LEE"],
];
console.log(array[5][0]);

// 객체 리터럴(오브젝트) : 객체를 정의하는 가장 간단한 방법, 중괄호{} 사용
// 함수 삽입도 가능
let memberinfo = {
  name: "PHAM",
  age: 20,
  addr: "서울시 성동구 성수동",
  score: [99, 88, 77],
  getInfo: function () {
    return `이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.addr}, 성적 : ${this.score}`;
  },
};
console.log(memberinfo.getInfo());

// 비교연산자 : 자바스크립트에는 동등연산자와 일치연산자가 있음

// 동등연산자 : 값이 같은지 확인
// 값이 같으면 true
console.log(1 == "1"); // true

// 일치연산자 : 값과 자료형이 같은지 확인
// 값 AND 자료형이 같으면 true
console.log(1 === "1"); // false

// 값 AND 자료형이 다르면 true
console.log(1 !== "1"); // true

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

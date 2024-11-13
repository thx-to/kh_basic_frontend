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

// toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
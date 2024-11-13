// 객체 : 자바스크립트에서는 원시타입을 제외한 모든 값이 객체
// 객체는 중괄호{}를 사용하여 만들며, 속성(property)과 값(value)으로 구성
// 객체는 객체 리터럴을 사용하여 생성
const person = {
  name : "PHAM",
  age : 20,
  addr : "Seoul",
  job : "NewJeans",

  // 익명의 함수 넣기
  info : () => {
    return `이름 : ${person.name}, 나이 : ${person.age}, 주소 : ${person.addr}, 직업 : ${person.job}`
  }
};

console.log(person.name);
console.log(person["age"]);
console.log(person);
console.log(person.info());




const profile = [
  {
    name: "PHAM",
    age: 20,
    // 객체 안에 history 배열 추가
    history: [
      {
        date: "2024-09-01",
        product: "iPhone 16 Pro"
      },
      {
        date: "2022-07-26",
        product: "iPhone 14 Pro Max"
      }
    ]
  },
  {
    name: "KIM",
    age: 20,
    // KIM의 history도 배열 형태로 통일
    history: [
      {
        date: "2024-10-01",
        product: "iPhone XS Max"
      }
    ]
  },
  {
    name: "MO",
    age: 19,
    history: [
      {
        date: "2024-11-01",
        product: "iPhone XR"
      }
    ]
  }
];

// 출력 예시
console.log(profile);
console.log(profile[0].history[0].product); // "iPhone 16 Pro"
console.log(profile[1].history[0].date);    // "2024-10-01"


// 객체 속성 동적 추가하기
// 객체 속성에 키로 접근해 값을 재할당하면 기존 속성값을 변경할 수 있음
// 키가 없는 경우 해당 키와 값으로 구성된 새로운 속성이 객체로 추가됨
const carInfo = {}; // 없는 키 값을 넣어줌(빈 객체 생성)
carInfo.name = "Sonata";
carInfo.year = "2022/08/15";
carInfo.maxSpeed = "250km";
console.log(carInfo); // 빈 객체가 채워짐

// 객체 속성 동적으로 삭제하기
delete carInfo.maxSpeed;
console.log(carInfo);


// 생성자 : 자바스크립트에서는 클래스 대신 함수를 생성자를 통해 객체로 만들 수 있음
function Person(name, age, addr) {
  this.name = name;
  this.age = age;
  this.addr = addr;
  this.info = function() {
    return `이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.addr}`;
  }
};
const person1 = new Person("PHAM", 20, "Australia");
const person2 = new Person("KIM", 20, "강원도 춘천시");
const person3 = new Person("MO", 19, "아름다운 섬 제주");
console.log(person1.info());
console.log(person2.info());
// info 메소드를 호출하지 않고 직접 참조하는 경우
// 이 경우 info 메소드는 익명 함수(anonymous function)이기 때문에
// console.log()에서 이 함수 자체를 출력하려고 할 때 anonymous라는 이름이 출력됨
// 자바스크립트에서 함수 표현식 function(){}을 사용하여 정의된 함수는 이름 없는 함수, 즉 익명 함수로 간주됨
 // 함수 참조를 출력할 때 이 이름이 없으면 anonymous로 표시
console.log(person3.info); // anonymous


// 클래스 방식
class Person {
  constructor(name, age, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr;
  }
  info() {
    return `이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.addr}`;
  }
};
const person1 = new Person("PHAM", 20, "Australia");
const person2 = new Person("KIM", 20, "강원도 춘천시");
const person3 = new Person("MO", 19, "아름다운 섬 제주");
console.log(person1.info());
console.log(person2.info());
console.log(person3.info());
let memberInfo = [
  {
    name: "이영지",
    age: 21,
    job: "래퍼",
    addr: "서울시 강남구 청담동",
  },
  {
    name: "미미",
    age: 24,
    job: "오마이걸",
    addr: "서울시 강남구 역삼동",
  },
  {
    name: "안유진",
    age: 20,
    job: "아이브",
    addr: "서울시 강북구",
  },
];

// 자바스크립트 객체를 JSON 문서로 직렬화하기 : stringify()
let json = JSON.stringify(memberInfo);
console.log(json);

// JSON 문서를 자바스크립트 객체로 역직렬화하기 : JSON.parse()
const objMember = JSON.parse(json);
console.log(objMember);
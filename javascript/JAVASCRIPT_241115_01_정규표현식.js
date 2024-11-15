// 정규표현식(Regular Expression) : 특정 패턴을 정의해 문자열을 검색, 대체, 추출하는 데 사용
// 정규표현식 생성 방법 : 리터럴 방식, RegExp 객체 사용 방식


// RegExp 객체 사용 방식으로 정규표현식 생성하기
const regex1 = new RegExp("World");

// 리터럴 방식으로 정규표현식 생성하기
// 대부분의 경우는 리터럴 방식 사용
const regex = /World/;

// test() 메소드 사용하기
// 해당 문자열이 포함되어 있으면 true, 없으면 false 반환
let inputStr = "Hello World!"
console.log(regex.test(inputStr)); // true, world라는 문자열이 포함되어 있는지

// exec() 메소드 사용하기
// 문자열에서 패턴에 일치하는 첫번째 결과 반환, 일치하지 않으면 null 반환
const regex2 = /가장/;
const regex3 = /놀기/;
console.log(regex2.exec("가장 큰 실수는 포기입니다."));
console.log(regex3.exec("가장 큰 실수는 포기입니다.")); // null

// match() 메소드 사용하기
// 문자열에서 패턴에 일치하는 모든 결과를 배열로 반환
const inputText = "010-5006-4146";
const regNumber = inputText.match(/\d{3}-\d{4}-\d{4}/);
console.log(regNumber);
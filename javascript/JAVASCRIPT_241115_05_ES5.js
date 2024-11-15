// ES5 (ECMAScript 5) : 2009년 발표된 리액트의 핵심 문법
// 등장 개념 1) JASON 객체
// 등장 개념 2) ARRAY 메소드 : forEach(), map(), filter(), reduce()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach() : 배열의 요소 순회, 요소에 대해 지정된 함수 실행. 요소 내용 변경 불가
numbers.forEach((e) => console.log(e)); // 1 2 3 4 5 6 7 8 9 10

// map() : 배열의 요소 순회, 새로운 배열을 만듦
const squares = numbers.map((e) => e * e);
console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// filter() : 배열의 요소 중 조건을 만족하는 요소만 추출하여 새로운 배열을 만듦
const even = numbers.filter((e) => e % 2 == 0);
console.log(even); // [2, 4, 6, 8, 10]

// reduce() : 배열의 요소 순회, 순회 과정에서 누적값을 사용하여 하나의 결과값을 만듦
// 두개를 계산하면서 소모해서 하나의 값으로 만들어 내고 누적함
// 소모한다는 관점이기 때문에 정의하기에 따라 더하기 뿐 아니라 곱하기 등도 가능
const sum = numbers.reduce((a, b) => a + b, 0); // 0: 시작값
console.log(sum); // 55



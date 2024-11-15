// ES6 (ECMAScript 6) : 2015년 발표
// 등장 개념 1) let, const
// 가변 변수 let, 참조된 배열 자체가 변경 (메모리 주소도 변경 가능)
let arr1 = [1, 2, 3];
arr1.push(4); // 새 값 추가
console.log(arr1); // [1, 2, 3, 4], 배열 수정 및 메모리 주소 불변
arr1 = [4, 5, 6]; // 새 배열 할당
console.log(arr1); // [4, 5, 6], 배열 재할당 및 메모리 주소 변경

// 불변 변수 const, (메모리 주소 변경 불가능)
const arr2 = [1, 2, 3];
arr2.push(4); // 새 값 추가
console.log(arr2); // [1, 2, 3, 4], 배열 수정 및 메모리 주소 불변
//arr2 = [4, 5, 6]; // 새 배열 할당
//console.log(arr2); // TypeError: Assignment to constant variable, 새 배열(메모리 주소 변해야함) 할당 불가능으로 오류

// 등장 개념 2) 화살표 함수
// 짧은 함수 표현식으로 간결한 코드 작성 가능

// 기존의 함수 표현식
const add1 = function (x, y) {
  return x + y;
};
console.log(add1(1, 2)); // 3

// 화살표 함수
const add2 = (x, y) => x + y;
console.log(add2(1, 2)); // 3

// 등장 개념 3) 템플릿 리터럴
// 백틱(`)으로 묶은 문자열로 변수 쉽게 포함 가능
const name = "파마니";
const message = `${name} 준비 갈 완료!`;
console.log(message); // 파마니 준비 갈 완료!

// 등장 개념 4) 전개 연산자
// 배열이나 객체를 개별 요소로 분리해주고, 이를 이용해 배열을 합치거나 객체 병합 가능
const arra = [1, 2, 3];
const arrb = [4, 5, 6];
const arrc = [7, 8, 9];
const newArr = [...arra, ...arrb, ...arrc];
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 객체에서의 전개 연산자
const member = {
  name: "PHAM HANNI",
  age: 20,
  addr: "서울시 성동구 성수동",
}
console.log(member); // name: 'PHAM HANNI', age: 20, addr: '서울시 성동구 성수동'
const modifyMember = {...member, age: 22}; // age의 value를 22로 변경
console.log(modifyMember); // name: 'PHAM HANNI', age: 22, addr: '서울시 성동구 성수동

// 전개 연산자를 이용한 가변 인수 함수 만들기
// ...numbers는 전달된 인수를 배열로 만들어 줌
// reduce() 메소드를 이용해 모든 요소를 더한 값 반환
// reduce(accumulator, currentValue, currentIndex, array)
// 배열의 왼쪽부터 오른쪽까지 순차적으로 처리하면서 누적값 계산
// 매번 처리할 때마다 현재값이 되고, 이전까지의 계산 결과는 누적값
// acc는 누적값, cur은 현재값
// 초기값으로 0을 주었으므로 첫 번째 반복에서 acc는 0부터 시작
// 배열의 각 숫자가 cur로 들어감
function sum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
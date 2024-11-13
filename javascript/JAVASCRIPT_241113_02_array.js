// 배열에서 사용할 수 있는 속성과 메소드 활용하기
// 배열의 메소드는 크게 파괴적 메소드와 비파괴적 메소드가 있음
// 비파괴적 메소드느느 불변성의 원칙과 관련이 있음
const arr = [10, 20, 30, 40, 50];

// 배열을 순회하는 방법 1) forEach
// 배열을 순회하는 비파괴적 메소드를 사용, 원본 값을 유지함
// 자동 순회기 때문에 무조건 처음부터 끝까지 돌아야 함
arr.forEach((e) => {
  console.log(e); // 10 20 30 40 50
});
// 배열을 순회하는 방법 2) for문
// 이건 파괴적 메소드, 원본 값을 바꿈
// 범위를 지정해서 돌릴 수 있음
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 10 20 30 40 50
}
// 배열을 순회하는 방법 3) for of
// 이터러블 객체의 요소를 반복 (향상된 for문과 비슷함)
for (let e of arr) {
  console.log(e); // 10 20 30 40 50
}

// toString() : 배열 안의 모든 문자열을 쉼표로 구분하여 결합해 하나의 문자열로 반환
console.log(arr.toString()); // 10,20,30,40,50

// join() : 배열 안의 모든 문자열을 지정한 문자를 이용해 모두 결합
let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
console.log(fruits.join("*")); // Apple * Banana * Orange * Kiwi * Mango

// pop() : 스택 자료 구조에서 마지막 데이터를 제거하고, 제거한 데이터를 반환
console.log(fruits.pop()); // Mango
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Kiwi']

// push() : 배열에 새로운 요소를 추가
fruits.push("Watermelon");
console.log(fruits); // [ 'Apple', 'Banana', 'Orange', 'Kiwi', 'Mango', 'Watermelon']

// shift() : 배열에서 첫번째 요소를 제거하고, 제거한 데이터를 반환
console.log(fruits.shift()); // Apple
console.log(fruits); // [ 'Banana', 'Orange', 'Kiwi', 'Mango']

// unshift() : 배열의 맨 앞에 요소를 추가하고 배열의 길이를 반환
console.log(fruits.unshift("Lemon")); // 6, 새 배열의 길이 반환
console.log(fruits); // ['Lemon', 'Apple', 'Banana', 'Orange', 'Kiwi', 'Mango']

// 배열의 요소 변경
fruits[3] = "Peach";
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Peach', 'Mango']

// concat() : 2개 이상의 배열을 하나의 배열로 결합 (비파괴적 메소드)
const arrCar1 = ["KONA", "AVANTE", "SONATA"];
const arrCar2 = ["CASPER", "SANTEFE", "GRANDEUR"];
const newCar1 = arrCar1.concat(arrCar2);
console.log(newCar1); // ['KONA', 'AVANTE', 'SONATA', 'CASPER', 'SANTEFE', 'GRANDEUR']

// 전개연산자를 사용해 하나의 배열로 결합 (비파괴, 원본 배열이 변경되지 않고 새 배열이 만들어짐)
const newCar2 = [...arrCar1, ...arrCar2];
console.log(newCar2);  // ['KONA', 'AVANTE', 'SONATA', 'CASPER', 'SANTEFE', 'GRANDEUR']

// 이런식으로 새 내용 추가도 가능 (둘다)
const newCar3 = arrCar1.concat(arrCar2, "GV70"); // ['KONA', 'AVANTE', 'SONATA', 'CASPER', 'SANTEFE', 'GRANDEUR', 'GV70']
const newCar4 = [...arrCar1, ...arrCar2, "GV80"]; // ['KONA', 'AVANTE', 'SONATA', 'CASPER', 'SANTEFE', 'GRANDEUR', 'GV80']
console.log(newCar3);
console.log(newCar4);

// slice() : 시작 인덱스부터 종료 인덱스(파라미터 생략시 마지막 인덱스)까지 잘라내 새로운 배열로 반환 (비파괴적 메소드)
const newCar5 = newCar1.slice(3);
console.log(newCar5);

// sort() : 배열에 문자형 데이터가 있는 경우 오름차순 정렬 (파괴적 메소드)
// reverse() : 내림차순 정렬 (파괴적 메소드)
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log(fruits2); // ['Apple', 'Banana', 'Mango', 'Orange']
fruits2.reverse();
console.log(fruits2); // ['Orange', 'Mango', 'Banana', 'Apple']

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열로 반환 (비파괴적 메소드)
// 배열은 mapping되는게 ArrayList
// json형태가 백엔드에 가면 ArrayList, 자바스크립트에서는 배열
// 배열 안에 객체가 들어가는 형태, 보통 데이터를 받아오면 이런 형태를 띰
const persons = [
  {
    name: "PHAM",
    point: 100,
    city: "SEOUL",
  },
  {
    name: "KIM",
    point: 78,
    city: "INCHEON",
  },
  { name: "MO",
    point: 82,
    city: "JEJU" },
  {
    name: "KANG",
    point: 57,
    city: "DAEJEON",
  },
  {
    name: "LEE",
    point: 30,
    city: "BUSAN",
  },
];
const pass = persons.filter(e => e.point > 80);
console.log(pass); // point가 80 초과인 사람만 출력

// 네이밍 함수로 변경한다면 이런식
function over80(person) {
   return person.point > 80;
 }
 const pass1 = persons.filter(over80);
 console.log(pass); // point가 80 초과인 사람만 출력

// map() : 배열의 각 요소를 변환하고 그 결과로 새로운 배열을 반환하는 메소드 (비파괴적 메소드)
// map은 10개가 들어오면 10개 반환, 모든 요소를 변환
// filter는 10개가 들어와도 1개도 안 나올수도 있음 (조건에 맞지 않다면), 선택적으로 필터링
const numbers = [1, 2, 3, 4, 5];
const squareN = numbers.map(e => e*e);
console.log(squareN); // [1, 4, 9, 16, 25]

// 네이밍 함수로 변경한다면 이런식
function powerN (numbers) {
  return numbers*numbers
}
const squareN1 = numbers.map(powerN);
console.log(squareN1); // [1, 4, 9, 16, 25]
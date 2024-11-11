// 3개의 수를 입력받아 가장 큰 수와 작은 수를 화면에 출력하기
// prompt로 입력받은 값은 문자열이므로 숫자로 변경하기 위해서는 Number() 함수로 데이터형을 변경해야 함
// const 사용시에는 const num1 = Number(prompt("첫번쨰 수 : ")) 이런식으로 기재
// let : 변수 재할당 가능, 블록 스코프, 초기화 불필요(초기값 없이 선언된 후 나중에 값을 할당할 수 있음)
// const : 변수 재할당 불가능, 내용은 변경 가능(객체 속성이나 배열의 요소), 블록 스코프, 선언과 동시에 초기화 필요(이후 값 변경 불가능)

let num1 = prompt("첫번째 수를 입력하세요.", "");
let num2 = prompt("두번째 수를 입력하세요.", "");
let num3 = prompt("세번째 수를 입력하세요.", "");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

const nummax = Math.max(num1, num2, num3);
const nummin = Math.min(num1, num2, num3);

document.write("가장 큰 수 : " + nummax + "<br>");
document.write("가장 작은 수 : " + nummin);

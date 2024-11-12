// 함수 : 특정 작업을 반복하거나 재사용할 수 있도록 작성된 코드 블록
// 복잡한 작업을 쉽게 처리할 수 있고, 코드 재사용성을 높임

// 함수 선언과 호출 : function 키워드 사용, 반드시 호출해야 함, 호이스팅이 적용됨
// 호이스팅 : 코드 실행 중 변수와 함수 선언이 해당 범위의 상단으로 끌어올려짐 
// 선언이 실제 코드의 위치와 관계없이 상위로 이동되어 실행됨
// 호이스팅 시점에는 변수나 함수의 선언만 끌어올려지고 초기화는 끌어올려지지 않고 undefined으로 설정됨

// 호이스팅이 되기 때문에 이렇게 먼저 호출해도 실행됨
console.log(sum(100, 200));
function sum(a, b) {
  return a + b;
}


 // 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅이 적용되지 않음
 // 주로 콜백 함수에서 많이 쓰임 (불러달라는 함수는 한번만 보통 한번만 쓰니까)
// 1. 익명의 함수로 만드는 방식 (한 번만 쓰고 버릴 때 사용)
// 2. 네이밍 함수로 만드는 방식 (거의 쓰이지 않음, 선언식으로 사용하는게 훨씬 범용적임)

// multiply라는 변수가 함수가 됨
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(100, 200));


// 함수 표현식을 화살표 함수로 만들기
// 화살표 함수는 함수 표현식을 간결하게 작성할 때 사용
const divide = (a, b) => a / b;
console.log(divide(10, 2));


// 화살표 함수는 this 바인딩이 함수 선언문과 다르게 동작함
function TestFunc() {
  this.value = 10;

  // 화살표 함수
  // 자기 객체를 참조하는 변수, 위 값을 그대로 내려받음 (객체지향문법의 this와 비슷)
  // TestFuc의 this에 접근할 수 있음, this는 TestFunc 객체 자체를 참조함
  // 자기 자신의 값을 갖지 않고 상속받은 this의 값으로 사용
  const arrowFunc = () => {
    console.log(this.value);
  };

  // 함수 선언문
  // 호출한 위치에 따라 this의 값이 결정됨
  // tradFunc 함수는 new TestFunc()에 의해 호출되지 않고 TestFunc 내부에서 독립적으로 호출됨
  // new TestFunc()가 호출된 이후 tradFunc는 TestFunc 인스턴스가 아닌 전역 객체의 this를 참조 (전역 객체에는 this에 대한 프로퍼티가 없으므로 undefined)
  // 동적 바인딩(불려지는 시점에서 결정)이 일어나야 하는데 동적 바인딩을 해줄 게 없음
  // tradFunc에서도 TestFunc의 this.value에 접근하는 방법
  // 1) tradFund를 화살표 함수로 변경하여 상위 this 상속받기
  // 2) TestFunc 생성자 내부에서 tradFunc 호출시 bind 메소드로 this를 고정하기 tradFunc.bind(this)();
  const tradFunc = function () {
    console.log(this.value);
  };

  // 호출
  arrowFunc();
  tradFunc();
}

// TestFunc는 new TestFunc()에 의해 호출
new TestFunc();


// 기본값 할당
function add (a, b = 10, c = 20) {
  console.log(a); // undefined
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6
console.log(add()); // NaN(Not a Number)


// 스코프 : 자바스크립트는 함수 스코프와 블록 스코프 방식으로 나뉨
// 이에 따라 전역 스코프와 지역 스코프로 참조 범위가 달라짐

// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인정하는 방식
let a = 10; // 전역 변수 선언 및 초기화
function sum2() {
  console.log(`함수 내부 : ${a}`); // 10
}
sum2(); // 호출
console.log(`함수 외부 : ${a}`); // 10


function sum2() {
  let a = 10; // 지역 변수로 변경
  console.log(`함수 내부 : ${a}`); // 10
}
sum2(); // 호출
console.log(`함수 외부 : ${a}`); // Reference Error : a is not defined / a가 지역 변수로 함수 내부에서 사용하고 사라짐

// 블록 스코프 : 블록문 기준으로 스코프의 유효 범위를 나눔
// 자바스크립트는 원래 함수 스코프 기반의 언어였지만, ES6에서 let, const 키워드가 추가되면서 블록 스코프도 지원
let b = 10;
{
  let c = 20;
  console.log(`코드 블록 내부 : ${b}`); // 10
  console.log(`코드 블록 내부 : ${c}`); // 20
}
console.log(`코드 블록 외부 : ${b}`); // 10
console.log(`코드 블록 외부 : ${c}`); // Reference Error : c is not defined

// var은 블록 스코프 키워드가 아니므로 정상 출력, 블록 무시됨
let d = 10;
{
  var e = 20;
  console.log(`코드 블록 내부 : ${d}`); // 10
  console.log(`코드 블록 내부 : ${e}`); // 20
}
console.log(`코드 블록 외부 : ${d}`); // 10
console.log(`코드 블록 외부 : ${e}`); // 20


// 참조 우선순위 : 전역변수보다 지역변수가 우선
// let, const 키워드는 같은 식별자의 중복 선언이 불가능 / var 키워드는 가능
// 블록 내부/외부에 같은 식별자는 중복 선언 가능 (지역변수 우선), 블록 내부에서 사용하고 소멸됨
let f = 10;
const g = 20;
{
  let f = 20;
  const g = 30;
  console.log(`블록 내부 : ${f}`); // 20
  console.log(`블록 내부 : ${g}`); // 30
}
console.log(`블록 외부 : ${f}`); // 10
console.log(`블록 외부 : ${g}`); // 20


// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수
// 전역 변수의 오염을 막기 위해 사용함 (다른 함수에 영향을 미칠 수 있음)

// 키오스크 예시
(function() {

  // 화면 초기화 루틴 수행
  console.log("화면 초기화 루틴 수행");

  // 통신 모듈 초기화 루틴 수행
  console.log("통신 모듈 초기화 루틴 수행");

  // 동작 준비 완료 출력 루틴 수행
  console.log("키오스크 동작 준비 완료");

  // 이런 루틴들이 있다고 치면 들어가자마자 수행해 줘야 함
  // 사용자가 이벤트를 줄 수 없음 > 즉시 실행 함수로 만들기

})();


(function () {
  let message = "Hello, world!"; // 지역 스코프에서만 접근 가능
  console.log(message); // Hello, world!
})();
console.log(message); // Reference Error : message is not defined

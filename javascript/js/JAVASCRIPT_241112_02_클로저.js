// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘

// 객체 안에 객체가 들어간 구조
// 외부 function 만들기
function Counter() {
  
  // private 변수
  let count = 0;

  return {

    // ES5 메소드 정의 방식) 메소드 이름 : 함수 표현식
    // 해당 함수 표현식이 메소드로 정의되어 객체의 메소드로 사용됨
    // 객체 리터럴 문법, 객체 안에 메소드를 정의하는 방식
    // ES6 메소드 정의 방식) 메소드 이름() {}
    // key와 value, key값으로 increment, value값으로 익명의 함수가 옴
    // increment 메소드는 클로저를 통해 count 변수에 접근
    increment: function () {
      count++;
      console.log(count);
    },

    // decrement 메소드는 클로저를 통해 count 변수에 접근
    decrement: function () {
      count--;
      console.log(count);
    },

  };
}

// myCount라는 객체를 function(Counter 함수)을 통해 만들기
const myCounter = Counter();

// increment()에 접근
myCounter.increment(); // 1
// 내부 상태값을 유지함 (2가 됨)
myCounter.increment(); // 2
// decrement()에 접근
myCounter.decrement(); // 1

// count 변수는 외부에서 직접 접근할 수 없음
console.log(myCounter.count); // undefined


// 클로저를 쓰는 이유는 내부의 상태값을 유지하기 위함
// 중첩 함수를 만들고 내부함수와 외부함수 사이에 있는 변수값 참조
// 결국 클래스 안에 메소드를 넣는 것과 같음
// 메소드와 함수의 가장 큰 차이점 : 메소드는 상태값을 유지, 함수는 매개변수로 전달될 때마다 상태값 달라짐 (매번 동일한 일)

// 클로저 대신 자바스크립트 클래스로 처리하기
// 자바스크립트는 constructor()라는 함수로 생성자를 만듦
// 생성자 : 내부 변수를 초기화하용도
class Counter {
  constructor() { // 생성자 만들기
      this.count = 0;
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
  decrement() {
    this.count--;
    console.log(this.count);
  }
}
const counter = new  Counter(); // 생성자 호출
counter.increment();
counter.increment();
counter.decrement();



// 반복문과 재귀호출
function forSum(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}

function whileSum(n) {
    let sum = 0;
    while (n) {
        sum += n;
        n--;
    }
    return sum;
}

function while2Sum(n) {
    let sum = 0;
    while (true) {
        sum += n;
        n--;
        if (n === 0) break;
    }
    return sum;
}

// 등차 수열
function gausSum(a) {
    return (a * (a + 1)) / 2;
}

// 재귀 호출
function recuSum(a) {
    if (a === 1) return 1;
    else return a + recuSum(a - 1);
}

const a = Number(prompt("정수를 입력하세요: "));
console.log(whileSum(a));
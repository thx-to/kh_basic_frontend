// 수학 연산을 다루는 Math 객체
console.log(Math.abs(-5)); // 출력: 5
console.log(Math.ceil(1.1)); // 출력: 2
console.log(Math.floor(1.9)); // 출력: 1
console.log(Math.round(1.4)); // 출력: 1
console.log(Math.max(1, 2, 3)); // 출력: 3
console.log(Math.min(1, 2, 3)); // 출력: 1
console.log(Math.pow(2, 3)); // 출력: 8
console.log(Math.sqrt(9)); // 출력: 3
console.log(Math.random()); // 출력: 0 이상 1 미만의 임의의 수


// Math.random() : 0보다 크고 1보다 작은 숫자형 값 반환
console.log(Math.random()); // 랜덤 숫자 반환
console.log(Math.floor(Math.random() * 10)); // 0에서 9 사이의 정수

// 로또 번호 뽑기
for (let i = 0; i < 6; i++) {
  console.log((Math.floor(Math.random() * 46)));
}
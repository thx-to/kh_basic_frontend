// Set 객체 : 중복되지 않는 값들을 모아 놓은 집합, 순서를 유지해줌
// (키 없이)값만 저장, 순서 기억(삽입 순서 유지), 값은 한 번만 존재
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 이미 1이란 값이 저장되어 있기 때문에 추가되지 않음
console.log(mySet.size); // 3

// Map객체 : key-value 쌍으로 데이터를 저장하고 관리 (Java의 HashMap과 거의 같음)
// 객체와 유사하지만 객체와 다르게 키에 다양한 자료형 사용 가능(key와의 차이점)
// 중복된 키를 허용하지 않음, 키가 같으면 기존 키의 값이 덮어씌워짐
// 삽입된 순서대로 요소 저장
// 알고리즘 성향은 Map, 단순한 데이터는 배열의 객체 사용
let map = new Map();
map.set("name", "유나");
map.set("email", "yuna@gmail.com");
map.set("addr", "경기도 수원시");

console.log(map.size); // 3
console.log(map.get("name")); // 유나
console.log(map.has("email")); // true
map.delete("name");

map.forEach(function (item) {
  console.log(item); // yuna@gmail.com 경기도 수원시
});
//map.forEach((item)=> {
//	console.log(item);
//});

map.clear();
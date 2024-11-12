// 문자열을 다루는 string 객체

// 문자열 길이 확인
const id = "phamhanni";
console.log(id.length);

// 특정 문자열 길이 이상 받기
const pw = "123";
if (pw.length < 4) {
  console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
}



// includes("문자열") : 포함 여부를 true/false로 반환
// 특정 문자열 포함 여부 확인
const email1 = "test!naver.com";
if (email1.includes("@") === false) {
  console.log("올바른 이메일 형식이 아닙니다.");
}

// indexOf("문자열") : 시작 인덱스를 반환하고, 없으면 -1
// 특정 문자열 포함 여부 확인
const email2 = "test!naver.com";
if (email2.indexOf("@") === -1) {
  console.log("올바른 이메일 형식이 아닙니다.");
}

// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index 반환
const email3 = "test@naver@com"
console.log(email3.lastIndexOf("@"));

// slice() : 시작 위치와 종료 위치를 주면 해당 문자열을 잘라내어 반환
let fruits = "Apple, Banana, Orange";
let slice_banana = fruits.slice(7, 13);
console.log(slice_banana); // Banana

// slice()의 파라미터는 음수도 올 수 있음
let slice_orange = fruits.slice(-6);
console.log(slice_orange); // Orange

let slice_2 = fruits.slice(-14, -8);
console.log(slice_2); // Banana

// substring() : 시작 위치와 종료 위치를 주면 해당 문자열을 잘라내어 반환
// substring()은 파라미터로 음수를 허용하지 않음
let slice_apple = fruits.slice(0, 5);
console.log(slice_apple);

// replace() : 문자열 내의 문자열을 지정한 문자열로 바꾸는 함수
let str = "지구오락실, 이영지, 안유진, 미미,이은지";
let n = str.replace("이은지", "나영석");
console.log(n);

// toUpperCase(), toLowerCase() : 문자열을 모두 대문자 및 소문자로 변경
const engStr = "A stitch in time saves nine."
console.log(engStr.toUpperCase()); // A STITCH IN TIME SAVES NINE.
console.log(engStr.toLowerCase()); // a stitch in time saves nine.

//두 개의 문자열을 합치기
// 복합 대입 연산자 + 사용
// 불변성의 원칙을 위배한다고 볼 수 있음(변수의 내용이 바뀜)
// 특히 리액트에서는 let을 허용하지 않음(변수가 바뀌는 걸 허용하지 않음) 모두 const
let str1 = "A stitch in time ";
str1 += "saves nine.";
console.log(str1); // A stitch in time saves nine.
// concat() 함수 사용하기
const str2 = "A stitch in time ";
const str3 = str2.concat("saves nine.");
console.log(str3); // A stitch in time saves nine.

// trim() : 문자열의 앞뒤 공백을 제거
const str4 = " Hello World! "
console.log(str4.trim());

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 문자를 길이만큼 추가
const fixStr = "1234";
const newStr = fixStr.padStart(10, 0);
console.log(newStr);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환
let addr = "서울시 강남구 역삼동";
console.log(addr.charAt(1)); // 울

// charCodeAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드값 반환
let str5 = "HELLO WORLD";
console.log(str5.charCodeAt(0)); // 72(H)

// split() : 특정 구분자 기준으로 문자열을 분리하고 분리된 문자열을 새로운 배열로 반환
let birthday = "1997-06-12";
let arr2 = birthday.split("-"); // 하이픈(-)을 기준으로 문자열을 분리해서 배열로 변환
console.log(arr2); // ['1997','06','02']
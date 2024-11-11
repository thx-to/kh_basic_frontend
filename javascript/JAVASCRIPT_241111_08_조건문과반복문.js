// 자바스크립트의 조건문은 if / if ~ else / if ~ else if ~ else / switch ~ case 문이 있음
// 자바스크립트의 반복문은 while / do ~ while(파이썬에는 없음) / for(초기값; 최종 조건식; 증감값;) / for ~ in(객체를 반복할 때) / for ~ of(iterable  객체를 순회, 향상된 for문과 같음)문이 있음

// 주민등록번호를 입력받아 성별, 나이 출력하기 (웹에 입/출력)
// 문자열을 자르는 함수 jumin.substring(0, 2) : 문자열 0번째~2번째 인덱스 미만까지 자름
// 문자열에서 해당 인덱스의 문자를 추출 jumin.charAt(5) : 문자열에서 5번 인덱스의 문자 추출
// 주민등록번호 입력 오류 체크하기 (길이 체크, "-" 포함 여부 확인)
// 특정 문자열 포함 여부 확인은 indexOf("-") 사용
// const date = new Date();
// date.getFullYear(); // 2024

let jumin = null;

while (true) {
  jumin = prompt("주민등록번호를 입력하세요. (예: 000000-0000000)");

  // 올바른 형식 체크: 길이와 "-" 위치(7번째 자리) 확인
  // jumin.indexOf("-") == -1 : "-"가 존재하지 않으면
  if (jumin.length !== 14 || jumin.indexOf("-") !== 6) {
    alert("입력 오류 : 주민등록번호는 '-'을 포함해야 합니다.");
  } else {
    break; // 형식이 올바르면 반복문을 종료
  }
}

const genderCode = jumin.charAt(7);
const birthYearPrefix = genderCode === "1" || genderCode == "2" ? "19" : "20";
const birthYear = Number(birthYearPrefix + jumin.substring(0, 2));
const currentYear = new Date().getFullYear(); // Date 객체 생성 후 getFullYear() 호출
const age = currentYear - birthYear;
const genderStr = genderCode === "1" || genderCode === "3" ? "남성" : "여성";

// 결과 출력
document.write(`<p class="box">성별 : ${genderStr} <br> 나이 : ${age}</p>`);
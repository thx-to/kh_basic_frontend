const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
let birthYear;
let age;

birthYear = prompt("태어난 연도를 입력하세요 (YYYY) : ", "");
age = currentYear - birthYear;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");

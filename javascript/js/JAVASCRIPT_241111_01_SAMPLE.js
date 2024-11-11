const PI = 3.14;
console.log(PI * 20);
console.log("안녕하세요");

/* head-line이라는 id 선택자 */
/* 클릭시 red 색상으로 변경 */
const head = document.querySelector("#head-line");
head.onclick = function() {
  head.style.color = "red";
}

alert("이것은 경고창입니다.");

let result = confirm("색상을 변경하시겠습니까?");
console.log(result);
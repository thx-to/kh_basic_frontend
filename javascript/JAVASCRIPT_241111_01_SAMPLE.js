const PI = 3.14;
console.log(PI * 20);
console.log("안녕하세요");

/* head-line이라는 id 선택자 */
const head = document.querySelector("#head-line");
head.onclick = function() {
  head.style.color = "red";
}
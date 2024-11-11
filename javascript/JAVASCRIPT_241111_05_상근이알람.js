// 시간과 분을 입력하면 45분 일찍 시간이 설정되도록 변경하는 프로그램
// 시간은 24시간제
// 00:30 입력시 > 11:45 출력
// parseInt() 함수 : 해당 값을 정수로 반환

const hour = Number(prompt("시간을 입력하세요 : "));
const minute = Number(prompt("분을 입력하세요 : "));

const mintime = minute + (hour * 60) - 45
let newhour = parseInt(mintime / 60);
let newminute = mintime % 60;
if (newminute < 0) {
  newhour = newhour + 23;
  newminute = newminute + 60;
}

document.write("알람 시간은 " + newhour + " : " + newminute + " 입니다.");


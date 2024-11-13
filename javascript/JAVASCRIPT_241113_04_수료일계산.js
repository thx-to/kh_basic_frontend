// 날짜 간격 계산하기
// 24(시간) X 60(분) X 60(초) X 1000(밀리초) 

// remainTime() : 두 날짜간의 차이를 밀리초로 계산한 것
// 이 밀리초 값을 1000*60*60*24로 나누면 남은 일수가 나옴
// remainTime = parseInt(remainTime/(1000*60*60*24));


const remainTime = targetDate => {
  const date = new Date();
  const target = new Date(targetDate);

  const time = target - date;
  const day = parseInt(time/(1000*60*60*24) + 1);

  return day;
}

document.write(remainTime("2025-03-24"));
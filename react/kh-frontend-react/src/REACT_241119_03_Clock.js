import { useState, useEffect } from "react";

const Clock = () => {

  // 시간을 읽으면 현재 시간이 읽힘
  // 컴포넌트가 렌더링될 때 현재 시간을 데이터에 넣음
  const [date, setDate] = useState(new Date());

  // 시간을 가게 하려면 1초마다 업데이트해야 함
  // 1초마다 업데이트하는 함수 생성
  //const tick = () => {
  //  setDate(new Date());
  //}
  // 1초에 한번씩 불러줌
  // Interval이 불릴 때마다(1초마다) 무한 복제
  // Clock 안에 있기 때문에 하나만 있어도 될 것(타이머)이 계속계속 만들어짐
  // 동작 자체는 맞음
  // 한번만 불려질 수 있게 수정 필요, 업데이트될 때는 안불려지게
  // setInterval(tick, 1000);과 동일
  // setInterval(() => setDate(new Date()), 1000);

  // 생명주기 관리하기 (중복 실행과 메모리 누수 문제 방지)
  // 마운트 되는 시점(화면에 최초로 나타나는 시점) 잡기
  // 한 번 뿌려지고 난 다음에 불러주기
  // useEffect는 컴포넌트가 마운트될 떄 실행되고 언마운트될 때 클린업 작업 수행
  // setInterval이 한 번만 설정되고, 중복 생성되지 않음
  useEffect(() => {
    const intervalID = setInterval(() => setDate(new Date()), 1000);
    return() => clearInterval(intervalID);
  }, []); // 의존성 배열: 빈 배열이면 마운트 시점을 의미, 빈 배열을 전달하면 컴포넌트가 처음 렌더링될 때만 실행
  
  // 렌더링
  return (
    <>
    <h1>현재 시간을 표시합니다.</h1>
    <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};
export default Clock;
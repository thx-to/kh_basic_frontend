import "./App.css";

// 5) class 대신 className 사용
// 소문자로 시작하면 함수
// 대문자로 시작하면 컴포넌트가 됨

const member = {
  name: "PHAM",
  job: "NewJeans",
  addr: "SEOUL",
  gender: "FEMALE"
};

const getGreeting = user => {
  return (user) ? (
    <h1>환영합니다, {user}님</h1>
  ) : (
    <h1>환영합니다, 방문자님</h1>
  );
}

// class 선택자는 class가 아닌 className으로 변경됨 (JSX)
// 자바스크립트의 확장 문법, 자바스크립트의 예약어인 class는 사용할 수 없음
// 자바스크립트의 class 예약어는 class를 만들 때 사용
const GreetingComponent = () => {
  return (
    <div className="App">
      <p className="title-name">제 이름은 {member.name}이고,</p>
      <p className="title-name">직업은 {member.job}!</p>
      <p className="title-name">주소는 {member.addr}이고용</p>
      <p className="title-name">성별은 {member.gender}입니당💖</p>
      <hr />
      <p>{getGreeting(member.name)}</p>
    </div>
  );
}

export default GreetingComponent;
// 컴포넌트 : 리액트에서 UI를 구성하는 독립적인 모듈
// UI와 상태(State)를 가짐
// 대문자로 시작해야 함, 소문자로 시작하면 HTML 태그로 간주됨
// 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때는 props로 전달해야 함
// props는 키워드가 아님(그냥 일반 변수 이름처럼 사용 가능, 관례상 props를 변수 이름으로 씀, 원하는 이름으로 설정 가능)
// 문자열은 "", 다른 변수는 무조건 객체로 만들어줘야 함

{/*}
const WelcomeProps = (props) => {
  return (
    <>
    <h1>안녕하세요, {props.name}님</h1>
    <p>직업 : {props.job}</p>
    <p>주소 : {props.addr}</p>
    {props.isAdult ? <p>성인입니다.</p> : <p>미성년자입니다.</p>}
    </>
  );
};
*/}

// 구조 분해(비구조화 할당) : 배열이나 객체의 속성 혹은 값을 해체하여 그 값을 변수에 각각 담아 사용하는 자바스크립트 표현식
// props 객체를 받아오는 대신, 필요한 값만 구조분해해서 사용(필요한 값만 추출)
const WelcomeProps = ({name, job, addr, isAdult}) => {
  return (
    <>
      <h1>안녕하세요, {name}님</h1>
      <p>직업 : {job}</p>
      <p>주소 : {addr}</p>
      {isAdult ? <p>성인입니다.</p> : <p>미성년자입니다.</p>}
    </>
  );
};

export default WelcomeProps;
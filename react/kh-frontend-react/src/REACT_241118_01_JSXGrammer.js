// JSX 문법 이해하기

// 1) JSX에 표현식 포함하기 / 중괄호로 감싸 넣어주기 {변수나 간단한 연산식 등}
// DOM을 찾을 필요 없이 그냥 변수이름을 넣어줌 {name} (파이썬/리터럴 템플릿의 문법)

// 2) 감싸인 요소로 표현하기 : 컴포넌트 반환시 하나의 태그여야함

// 3) 조건부 렌더링 : JSX문 내부에서는 조건부 연산자를 사용할 수 있음
// 3항연산자 사용, 이름과 타입이 "리액트"이면, '리액트를 공부하겠습니다.', 아니면 '자바스크립트를 공부하겠습니다.'
// HTML과 유사하지만 JSX 자체에 이런식으로 조건식 사용 가능
// 참인 경우와 거짓인 경우에 서로 다른 화면을 구성할 수 있음
// member와 같이 boolean 값인 경우, false면 아래 구문이 아예 사라져 버림

// 4) 인라인 스타일링(자주 쓰는 방식은 아님) : 문자열 형태가 아닌, 객체 형태로 만들어야 함 const inlineStyle

const inlineStyle = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const JsxSyntax = () => {
  const name = "fffff";
  const member = true;
  return (
    <>
      {name === "리액트" ? (
        <h1>리액트를 공부하겠습니다.</h1>
      ) : (
        <h1 style={inlineStyle}>자바스크립트를 공부하겠습니다.</h1>
      )}

      {member && (
        <>
          <h1>환영합니다, 고객님🥰</h1>
          <p>해당 메뉴를 자유롭게 사용하시면 됩니다.</p>
        </>
      )}
    </>
  );
};
export default JsxSyntax;

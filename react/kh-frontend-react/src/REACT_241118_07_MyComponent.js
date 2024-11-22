const MyComponent = (props) => {
  return (
    <>
    <p>안녕하세요, 제 이름은 {props.name}입니다.</p>
    <p>제 나이는 {props.age}세 입니다.</p>
    </>
  );
};

// defaultProps : props 값이 지정되지 않는 경우 할당되는 기본값 설정 (Default 매개변수와 비슷)
MyComponent.defaultProps = {
  name : "홍길동",
  age : 99
}

export default MyComponent;
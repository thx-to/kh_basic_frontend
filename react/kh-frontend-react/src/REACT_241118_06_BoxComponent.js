import styled from "styled-components";

// 이런식으로 사용하기 때문에 결국 클래스 선택자를 사용할 필요가 없음
const BoxStyle = styled.div`
  padding: 20px;
  margin: 10px;
  width: 300px;
  background-color: orange;
  color: white;
  font-size: 1.4em;
  font-weight: 800;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
`

const BoxComponent = ({ children }) => {
  return (
    <BoxStyle>{children}</BoxStyle>
  );
};

export default BoxComponent;
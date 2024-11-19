import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  text-align: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  // 배치를 따로 안넣으면 수평 배치
  gap: 10px;
`;

const Button1 = styled.button`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 20px;
  font-weight: 600;
  background-color: #f1f1f1;
  // or 연산자, 컬러값이 있으면 그대로, 없으면 black
  color: ${(props) => props.color || "black"};
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  // hover 등 효과 추가시
  // &는 자기 자신이라는 뜻
  &:hover {
    background-color: #555;
    color: #fff;
    cursor: pointer;
  }
  &:active {
    transform: translateY(1px);
  }
`;

const Button2 = styled.button`
  box-sizing: border-box;
  width: 100px;
  padding: 10px 20px;
  font-weight: 600;
  // or 연산자, 컬러값이 있으면 그대로, 없으면 black
  background-color: ${(props) => props.color || "black"};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Say = () => {

  // message를 상태관리 하겠다 (useState)
  // message 내용이 바뀌면 렌더링을 하겠다
  // setMessage는 내부 인스턴스 값을 바꾸는(설정) Java의 Setter와 비슷
  // React에서는 Getter가 필요 없고 인스턴스 값을 직접 읽음(필드), message
  // useState 2개 생성
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  // 이벤트 핸들러 함수 2개 생성
  const onClickEnter = () => setMessage("안녕하세요😀");
  const onClickLeave = () => setMessage("안녕히가세요😂");

  return (
    <Container>
      <BtnContainer>
        <Button1 onClick={onClickEnter}>입장</Button1>
        <Button1 onClick={onClickLeave}>퇴장</Button1>
      </BtnContainer>
      {/* 스타일 객체 대신 프로퍼티를 위해서는 중괄호를 하나 더 넣어줌 */}
      {/* 객체를 만들지 않고, 구조 분해를 해서 따로 넣어줌 */}
      <h1 style={{ color: value }}>{message}</h1>
      <BtnContainer>
        <Button2 color="red" onClick={() => setValue("red")}>
          RED
        </Button2>
        <Button2 color="green" onClick={() => setValue("green")}>
          GREEN
        </Button2>
        <Button2 color="blue" onClick={() => setValue("blue")}>
          BLUE
        </Button2>
      </BtnContainer>
    </Container>
  );
};

export default Say;
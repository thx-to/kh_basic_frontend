// 전역 상태 관리를 위한 훅
import { useContext } from "react";

// 사용자(나)가 만든, 전역 상태 정보 제공을 위한 컴포넌트
import { UserContext } from "../context/REACT_241125_02_UserStore";

import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 1; // 전체 차지
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: orangered;
`;

const Button = styled.button`
  margin: 10px;
  width: 300px;
  height: 70px;
  background-color: orangered;
  border: 2px solid white;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 1px 1px 5px #999;
  // 컬러가 있으면 css 재정의
  ${props => props.color && css`
    background-color: ${props.color};
  `}
  &:active {
    transform: translateY(2px);
  }
`;

const Setting = () => {

  // props를 이용하지 않고, 구조분해로 바로 받기

  // SetColor는 값을 쓰는 useState의 Setter 함수
  const {setColor} = useContext(UserContext);
  const navigate = useNavigate();
  const colorChange = color => {
    setColor(color);
    // 버튼을 누르면 배경색 바뀌고 home으로 이동
    navigate("/home");
  };

  return (
    <Container>
      <Button color="orange" onClick={() => colorChange("orange")}>
        ORANGE
      </Button>
      <Button color="green" onClick={() => colorChange("green")}>
        GREEN
      </Button>
      <Button color="lightgray" onClick={() => colorChange("lightgray")}>
        LIGHTGRAY
      </Button>
    </Container>
  );

};

export default Setting;
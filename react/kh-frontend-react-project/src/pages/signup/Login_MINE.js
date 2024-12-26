import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserStore";

// Container 스타일 설정
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  min-width: 400px;
  height: 60vh;
  min-height: 400px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.05);
`;

// Material-UI TextField 재정의
const StyledTextField = styled(TextField)`
  && {
    margin-top: 10px;
    width: 300px;
    .MuiOutlinedInput-root {
      border-radius: 50px;
    }
  }
`;

// Material-UI Button 재정의
const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
    width: 300px;
    height: 50px;
    border-radius: 50px;
  }
`;

const P1 = styled.p`
  font-size: 0.8em;
  color: gray;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

// Login 컴포넌트
const Login = () => {
  // 입력에 대한 상태 관리
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");

  // 유효성 검사
  const [isID, setIsID] = useState(false);
  const [isPW, setIsPW] = useState(false);

  // 페이지 이동을 위한 객체
  const navigate = useNavigate();

  // UserContext(사용자=나가 만든 UserContext의 전역 상태 값에 접근)
  const context = useContext(UserContext);

  // 2개만 구조분해해서 빼오기
  const { setUserID, setUserPW } = context;

  const onChangeID = (e) => {
    // inputID는 마지막 입력값이 반영(업데이트)이 안된 상태라서 setInputID로 비교
    setInputID(e.target.value);
    // 값이 바뀌면 이 값을 사용하는 곳에서 리렌더링 발생, 전역 상태 값 갱신
    setUserID(e.target.value);
    // 5자 이상이면 true, 아니면 false 유지
    e.target.value.length >= 5 ? setIsID(true) : setIsID(false);
  };

  const onChangePW = (e) => {
    setInputPW(e.target.value);
    setUserPW(e.target.value);
    e.target.value.length >= 5 ? setIsPW(true) : setIsPW(false);
  };

  const onClickLogin = () => {
    if (inputID === "admin" && inputPW === "12345") {
      navigate("/home");
    } else {
      alert("아이디 혹은 비밀번호를 잘못 입력하셨습니다.");
    }
  };

  const onClickSignup = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <FormContainer>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/1TYPO%20(2).png?alt=media&token=222b5644-1d64-4670-b716-57e315929809"
          width="60px"
        />
        <br />
        <StyledTextField
          id="inputID"
          onChange={onChangeID}
          label="아이디"
          variant="outlined"
        />
        <StyledTextField
          id="inputPW"
          onChange={onChangePW}
          label="비밀번호"
          variant="outlined"
          type="password"
        />
        {isID && isPW ? (
          <StyledButton
            variant="contained"
            color="primary"
            onClick={onClickLogin}
          >
            Login
          </StyledButton>
        ) : (
          <StyledButton
            disabled
            variant="contained"
            color="primary"
            onClick={onClickLogin}
          >
            Login
          </StyledButton>
        )}
        <br />
        <P1 onClick={onClickSignup}>아직 회원이 아니신가요?</P1>
      </FormContainer>
    </Container>
  );
};

export default Login;

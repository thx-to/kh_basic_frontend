import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Container, StyledInput, StyledButton } from "../styles/REACT_241122_06_CommonStyle";

// default export한게 아니기 때문에 중괄호를 넣어줘야 함
import { UserContext } from "../context/REACT_241125_02_UserStore";

const Login = () => {

  // 키보드 입력에 대한 상태 관리
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");

  // 간단한 유효성 검사 진행
  const [isID, setIsID] = useState(false);
  const [isPW, setIsPW] = useState(false);

  // useNavigate라는, 페이지 이동을 위한 객체 만들기
  const navigate = useNavigate();
  
  // useContext 훅으로 사용자(나)가 만든 UserContext의 전역 상태 값에 접근 (4가지 value 값)
  const context = useContext(UserContext);

  // 4개 값 중 2개를 구조분해해서 빼옴
  const {setUserID, setUserPassword} = context;

  const onChangeID = e => {
    // 주의) inputID는 마지막 입력값이 반영(업데이트)이 안된 상태라서 setInputID로 비교해야 함
    setInputID(e.target.value);

    // 값이 바뀌면 이 값을 사용하는 곳에서 리렌더링이 일어남
    // 전역 상태 값을 갱신해줌
    setUserID(e.target.value);

    e.target.value.length >= 5 ? setIsID(true) : setIsID(false);
  };

  const onChangePW = e => {
    setInputPW(e.target.value);
    setUserPassword(e.target.value);
    e.target.value.length >= 5 ? setIsPW(true) : setIsPW(false);
  };

  // 값을 받는게 아니라 이벤트를 부르는게 없음
  // 서버에 다녀 와야 함 (원래는 axios 비동기 통신을 호출하고 결과를 수신 및 결과값 확인해야 함)
  const onClickLogin = () => {
    if (inputID === "hannipham" && inputPW === "newjeans") {
      navigate("/home");
    } else {
      alert("아이디 혹은 비밀번호를 잘못 입력하셨습니다.");
    }
  };

  return (
    <Container>
      <StyledInput
        id="inputID"
        placeholder="아이디를 입력하세요."
        onChange={onChangeID}
      ></StyledInput>
      <br />
      <StyledInput
        id="inputPW" type="password"
        placeholder="비밀번호를 입력하세요."
        onChange={onChangePW}
      ></StyledInput>
      <br />
      <br />
      {isID && isPW ? (
        <StyledButton onClick={onClickLogin}>
          확인
        </StyledButton>
      ) : (
        <StyledButton disabled onClick={onClickLogin}>
          확인
        </StyledButton>
      )}
    </Container>
  );

};

export default Login;
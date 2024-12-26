import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import AxiosApi from "../../api/AxiosApi";

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
  height: 70vh;
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
    margin-bottom: 20px;
  }
`;

const Span = styled.span`
  width: 300px;
  margin-left: 20px;
  font-size: 0.8em;
  color: gray;
`;

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    pw: "",
    confirmPW: "",
    name: "",
  });

  const [validMsg, setValidMsg] = useState({
    id: "",
    pw: "",
    confirmPW: "",
  });

  const [isValid, setIsValid] = useState({
    id: false,
    pw: false,
    confirmPW: false,
    name: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    switch (name) {
      case "id":
        validID(value);
        break;
      case "pw":
        validPW(value);
        break;
      case "confirmPW":
        validConfirmPW(value);
        break;
      case "name":
        setIsValid((prevValid) => ({
          ...prevValid,
          name: value.trim().length > 0,
        }));
        break;
      default:
        break;
    }
  };

  const validID = (id) => {
    const idRegex = /^\w{8,20}$/;
    if (!idRegex.test(id)) {
      setValidMsg((prevMsg) => ({
        ...prevMsg,
        id: "아이디는 영문자, 숫자, 언더바(_)만 포함할 수 있으며,\n8자 이상 20자 이하여야 합니다.",
      }));
      setIsValid((prevValid) => ({ ...prevValid, id: false }));
    } else {
      memberRegCheck(id);
    }
  };

  const validPW = (pw) => {
    const pwRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pwRegex.test(pw)) {
      setValidMsg((prevMsg) => ({
        ...prevMsg,
        pw: "비밀번호는 영문 대소문자, 숫자, 특수문자를\n모두 포함하여 8자리 이상이어야 합니다.",
      }));
      setIsValid((prevValid) => ({ ...prevValid, pw: false }));
    } else {
      setValidMsg((prevMsg) => ({
        password: "안전합니다.",
      }));
      setIsValid((prevValid) => ({ ...prevValid, password: true }));
    }
  };

  const validConfirmPW = (confirmPW) => {
    if (confirmPW !== formData.pw) {
      setValidMsg((prevMsg) => ({
        ...prevMsg,
        confirmPW: "비밀번호가 일치하지 않습니다.",
      }));
      setIsValid((prevValid) => ({ ...prevValid, confirmPW: false }));
    } else {
      setValidMsg((prevMsg) => ({
        ...prevMsg,
        confirmPW: "비밀번호가 일치합니다.",
      }));
      setIsValid((prevValid) => ({ ...prevValid, confirmPW: true }));
    }
  };

  const memberRegCheck = async (id) => {
    try {
      const resp = await AxiosApi.memberRegCheck(id);
      if (resp.data === true) {
        setValidMsg((prevMsg) => ({
          ...prevMsg,
          id: "사용 가능한 아이디입니다.",
        }));
        setIsValid((prevValid) => ({ ...prevValid, id: true }));
      } else {
        setValidMsg((prevMsg) => ({
          ...prevMsg,
          id: "이미 존재하는 아이디입니다.",
        }));
        setIsValid((prevValid) => ({ ...prevValid, id: false }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegistration = async () => {
    const { id, pw, name } = formData;
    try {
      const memberReg = await AxiosApi.memberReg(id, pw, name);
      if (memberReg.data === true) {
        navigate("/");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <Container>
      <FormContainer>
        <h2 style={{ marginTop: "20px" }}>회원가입</h2>
        <br />
        <StyledTextField
          id="id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          label="아이디"
          variant="outlined"
        />
        {formData.id && (
          <Span className={`message ${isValid.id ? "success" : "error"}`}>
            {validMsg.id.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </Span>
        )}
        <StyledTextField
          id="pw"
          name="pw"
          value={formData.pw}
          onChange={handleInputChange}
          label="비밀번호"
          variant="outlined"
          type="password"
        />
        {formData.pw && (
          <Span className={`message ${isValid.pw ? "success" : "error"}`}>
            {validMsg.pw.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </Span>
        )}
        <StyledTextField
          id="confirmPW"
          name="confirmPW"
          value={formData.confirmPW}
          onChange={handleInputChange}
          label="비밀번호 확인"
          variant="outlined"
          type="password"
        />
        {formData.confirmPW && (
          <Span
            className={`message ${isValid.confirmPW ? "success" : "error"}`}
          >
            {validMsg.confirmPW.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </Span>
        )}
        <StyledTextField
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          label="이름"
          variant="outlined"
        />
        {isValid.id && isValid.pw && isValid.confirmPW && isValid.name ? (
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleRegistration}
          >
            Signup
          </StyledButton>
        ) : (
          <StyledButton
            disabled
            variant="contained"
            color="primary"
            onClick={handleRegistration}
          >
            Signup
          </StyledButton>
        )}
      </FormContainer>
    </Container>
  );
};

export default Signup;

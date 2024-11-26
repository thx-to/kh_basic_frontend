import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Items } from "../../component/LoginComponent";
import Button from "../../component/Button";
import Input from "../../component/Input";
import imgLogo from "../../images/kakaoLion.png";
import styled from "styled-components";

const Img = styled.img`
  width: 180px;
  object-fit: cover;
`;

const Login = () => {
  // 키보드 입력
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    e.target.value.length < 5 ? setIsId(false) : setIsId(true);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
    e.target.value.length < 5 ? setIsPw(false) : setIsPw(true);
  };
  const onClickLogin = async () => {};

  return (
    <Container>
      <Items className="item1">
        <Img src={imgLogo} alt="Logo" />
      </Items>

      <Items className="item2">
        <Input
          placeholder="이메일"
          value={inputEmail}
          onChange={onChangeEmail}
        />
      </Items>

      <Items className="item2">
        <Input placeholder="패스워드" value={inputPw} onChange={onChangePw} />
      </Items>

      <Items className="item2">
        {isId && isPw ? (
          <Button enabled onClick={onClickLogin}>
            SIGN IN
          </Button>
        ) : (
          <Button disabled>SIGN IN</Button>
        )}
      </Items>

      <Items className="signup">
        <Link to="/Signup" className="link_style">
          <span>Sign Up</span>
        </Link>
      </Items>
    </Container>
  );
};
export default Login;

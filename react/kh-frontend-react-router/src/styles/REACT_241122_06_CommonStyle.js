import styled from "styled-components";

// 색상 정의
const defaultABackgroundColor = "#f9aa06";
const defaultFontColor = "#ffffff";

// 변수 앞에 바로 export 붙여서 쓸 수 있음
export const Container = styled.div`
  top: -100px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  width: 100%;
  margin: auto;
  background-color: ${props => props.color || defaultABackgroundColor};
`;

export const StyledInput = styled.input`
  margin: 0 30px;
  width: 70%;
  height: 50px;
  padding: 1em;
  border: 1px solid #999;
  border-radius: 18px;
  outline-style: none;
`;

export const StyledButton = styled.button`
  margin: 0 30px;
  font-weight: bold;
  width: 70%;
  height: 50px;
  color: white;
  background-color: #999;
  font-size: 15px;
  border-radius: 18px;
  border: orange;
`;
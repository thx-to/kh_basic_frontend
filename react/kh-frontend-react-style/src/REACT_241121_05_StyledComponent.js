import styled, { css } from "styled-components";

const Container = styled.div `

// props로 color값을 전달하면 해당 값이, 아니면 blue가 background-color로 들어감
  background: ${props => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button `
  background: white;
  color: black;
  border-radius: 4px;
  padding: .5rem;
  box-sizing: border-box;
  font-size: 1em;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  ${(props) => props.inverted && css`
    background: none;
    border: 2px solid white;
    color: white;

    &:hover {
      background: white;
      color: black;
    }
  `};

  // 다음 버튼과 내 버튼(self) 사이에(왼쪽) 마진 1rem
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Container color="orangered">
      <Button>HELLO!</Button>
      <Button inverted={true}>BORDER-LINE-ONLY</Button>
    </Container>
  );
};

export default StyledComponent;
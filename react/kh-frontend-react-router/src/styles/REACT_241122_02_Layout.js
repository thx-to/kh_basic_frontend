import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: black;
  padding: 16px;
  color: white;
  font-size: 30px;
  font-weight: 800;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  padding-top: 100px;
  text-align: center;
  height: calc(100vh - 100px);
`;

const Footer = styled.footer`
  background-color: lightgray;
  text-align: center;
  font-size: 16px;
  height: 30px;
`;

const Layout = () => {
  return (
    <>

    <Header>
      요기는 헤더 영역
    </Header>


    <Main>
      <Outlet />
    </Main>


    <Footer>
      요기는 푸터 영역
    </Footer>

    </>
  );
};

export default Layout;
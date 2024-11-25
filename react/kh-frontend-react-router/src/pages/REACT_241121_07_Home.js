import { Link } from "react-router-dom";

// 사용자가 context를 만들기 위해(createContext) 만든 컴포넌트
import { UserContext } from "../context/REACT_241125_02_UserStore";

// 리액트가 제공하는 훅
import { useContext } from "react";

const Home = () => {

  const {userID, userPassword} = useContext(UserContext);

  return (
    <>
      <h1>여기는 Home 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <br />
      <ul>
        <li>
          <Link to="/about">About으로 이동</Link>
        </li>
        <br />
        <li>
          <Link to="/profile/DEV1">Java Profile</Link>
        </li>
        <li>
          <Link to="/profile/DEV2">React Profile</Link>
        </li>
        <li>
          <Link to="/profile/DEV3">Python Profile</Link>
        </li>
        <br />
        <li>
          <Link to="/articles">게시판 목록</Link>
        </li>
      </ul>
      <p>ID : {userID}</p>
      <p>pw : {userPassword}</p>
    </>
  );
};

export default Home;

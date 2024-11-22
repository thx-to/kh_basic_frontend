import { Link } from "react-router-dom";

const Home = () => {
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
    </>
  );
};

export default Home;

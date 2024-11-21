import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
      <h1>여기는 About 입니다.</h1>
      <p>소개 페이지 입니다.</p>
      <Link to="/">Home으로 이동</Link>
    </>
  );

};

export default About;
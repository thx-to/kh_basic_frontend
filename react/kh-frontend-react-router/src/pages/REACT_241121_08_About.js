import { Link, useLocation, useSearchParams } from "react-router-dom"

// 쿼리스트링 : URL의 뒷부분에 붙여서 전달하는 유동적인 데이터?키=값&키=값

const About = () => {

  // 쿼리스트링 1) useLocation 사용
  const location = useLocation();

  // 쿼리스트링 2) useSearchParams 사용
  const [searchParams, setSearchParams] = useSearchParams();
  // 쿼리스트링에서 정보가져오기 (detail과 mode 값)
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  // detail 값을 토글하는 함수
  const onToggleDetail = () => {
    // param라는 자체가 키와 밸류로 구성된 하나의 객체, 여러 개의 객체가 담겨 있음
    // 객체 내 키와 밸류 등이 여러개 담겨 있음, 파라미터를 객체 형태로 넣어 줌 ({})
    // 값이 true이면 false, false이면 true (토글을 위한 detail 값 바꿔 넣기)
    setSearchParams({mode, detail: detail === "true" ? false : true});
  };
  // mode 값을 증가시키는 함수
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode: nextMode, detail});
  };

  return (
    <>
      <h1>여기는 About 입니다.</h1>
      <p>소개 페이지 입니다.</p>
      <br />
      {/* 쿼리스트링 1) useLocation 사용 */}
      <p>쿼리스트링 : {location.search}</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle Detail</button>
      <button onClick={onIncreaseMode}>Mode + 1</button>
      <br />
      <br />
      <Link to="/home">Home으로 이동</Link>
    </>
  );

};

export default About;
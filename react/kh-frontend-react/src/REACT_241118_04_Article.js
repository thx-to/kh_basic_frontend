// Article이라는 컴포넌트 별도로 만들어주기
// 분리와 추상화 : 큰 Article이라는 큰 UI를 여러 작은 컴포넌트로 나눔으로써 각 컴포넌트가 특정 역할에만 집중하게 해줌
// HeadLine, NewsContent, NewsDate / 나중에 다른 화면에서 이 컴포넌트들을 독립적으로 재사용할 수 있음
// 컴포넌트 간 조합 : Article은 HeadLine, NewsContent, NewsDate를 합성해 하나의 완전한 뉴스 기사 컴포넌트를 구성함
// 상위 컴포넌트와의 연결 : 상위 컴포넌트에서 데이터와 로직 관리, 하위 컴포넌트는 UI만 담당
// Articles는 데이터를 관리하여 여러 Article 컴포넌트 렌더링, Article은 단일 데이터를 받아 UI를 렌더링
// 컴포넌트 합성의 장점 1) 재사용성 증가 : 각 컴포넌트를 독립적으로 설계하면 다른 프로젝트나 페이지에서도 활용 가능, 코드 중복이 줄어들어 유지보수가 쉬워짐
// 컴포넌트 합성의 장점 2) 가독성 향상 : UI가 계층적으로 설계되어 코드가 구조화되고 이해하기 쉬워짐
// 컴포넌트 합성의 장점 3) 테스트 용이성 : 작은 컴포넌트 단위로 테스트할 수 있으므로 디버깅 간편
// 컴포넌트 합성의 장점 4) 유연성 향상 : 컴포넌트를 쉽게 교체하거나 수정 가능, 예를 들어 HeadLine의 스타일을 수정해도 Article의 나머지 부분에 영향을 주지 않음

import styled from "styled-components";

const HeadStyle = styled.h1`
  font-size: 1.3em;
  color: orangered;
  text-align: left;
`;

const HeadLine = ({ title }) => {
  return (
    <>
    <HeadStyle>기사 제목 : {title}</HeadStyle>
    </>
  );
};

const NewsContent = ({ description }) => {
  return (
    <>
    <p>본문 내용 : {description}</p>
    </>
  );
};

const NewsDate = ({ date }) => {
  return (
    <>
      <p>작성일 : {date}</p>
    </>
  );
};

{/*
// 원 형태
const Article = ({ data }) => {
  return (
    <>
      <h1>기사 제목 : {data.title}</h1>
      <p>본문 내용 : {data.description}</p>
      <p>작성일 : {data.date}</p>
    </>
  );
};
*/}

// 컴포넌트 합성
// 함수형 컴포넌트 Article, props라는 매개변수를 통해 부모 컴포넌트로부터 데이터를 전달받음
// 구조분해 할당 : ({ data })를 사용해 props에서 바로 data 속성을 분리함, props.data 대신 단순히 data로 접근 가능
// Articles 부모 컴포넌트의 const data 컴포넌트
const Article = ({ data }) => {
  return (
    <>
      <HeadLine title={data.title} />
      <NewsContent description={data.description} />
      <NewsDate date={data.date} />
    </>
  );
};

// 이 Article 컴포넌트를 모듈의 기본 내보내기로 설정
// 다른 파일에서 import Article from './article';과 같은 형태로 이 컴포넌트를 불러올 수 있음
export default Article;

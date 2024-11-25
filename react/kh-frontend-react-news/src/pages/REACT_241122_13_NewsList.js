import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsItems from "./REACT_241122_12_NewsItems";

// NewsList 컴포넌트 : 여러 개의 뉴스 기사를 반복적으로 렌더링
// NewsItems 컴포넌트를 재사용하여 sampleArticle 데이터를 전달
// styled-components로 NewsListBlock을 스타일링
// 반응형 디자인 : @media screen and (max-width: 768px)에서 너비와 패딩 조정

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;


const NewsList = ({category}) => {

  // 데이터 연동하기
  // 값이 없다면 빈 문자열(null) 반환
  const [articles, setArticles] = useState(null);

  // useEffect에서 콜백함수를 부를 때
  // 비동기 처리가 필요한 때 : 언제 응답이 올 지 모를 때
  // 콜백함수도 비동기 개념이 있음 (즉시 실행이 아니고 useEffect의 상황-의존성 배열(마운트 되는 시점) 등-에 따라 부름)
  // useEffect에 직접 async를 붙이지 않고 내부에서 별도의 async 함수를 정의함 (useEffect에 전달하는 함수는 동기 함수여야만 함)
  // useEffect가 불려지면 이 안에서 fetchData 함수가 불려지고 그 안에 async가 불림
  // 내부 함수를 만들면 호출 과정이 필요함 (마지막 fetchData())
  // 내부는 동기적으로 작업하다가 await가 걸리면 실행 전까지 내려가지 못함 / 밖음 움직이고 있고 데이터에 대한 응답을 받아줄 때까지 멈춤
  // 서버에서 response.data 데이터가 들어오는 순간 렌더링이 일어남, 이 때 articles라는 데이터가 바뀌어 있음
  useEffect (() => {
    const fetchData = async() => {
      try {
        const query = category === "all" ? "all" : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&${query}&apiKey=1fa129beaf724b7f80e144ac725c3f7f`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      };
    };
      fetchData();
      // 의존성 배열이 비어 있으면 마운트 시점(컴포넌트 최초 렌더링 이후)에 호출
    }, [category]);

  return (
  <NewsListBlock>
    {/* 들어온 데이터가 있으니까 그 개수만큼 돌림 (articles && 조건부가 없다면 값이 없으면 죽음) */}
    {articles && articles.map((article, index) => (
      <NewsItems key={index} article={article} />
    ))}
  </NewsListBlock>
  );
};
export default NewsList;
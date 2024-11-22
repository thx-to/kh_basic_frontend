import styled from "styled-components";
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

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "http://google.com",
  urlToImage: "http://via.placeholder.com/160",
};

const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
      <NewsItems article={sampleArticle} />
    </NewsListBlock>
  );
};
export default NewsList;
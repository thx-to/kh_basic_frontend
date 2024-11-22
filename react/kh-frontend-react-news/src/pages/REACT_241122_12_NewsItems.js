import styled from "styled-components";

// NewsItems 컴포넌트 : 개별 뉴스 기사 표시
// 기사 제목(title), 설명(description), 링크(url), 썸네일 이미지(urlToImage)를 렌더링
// styled-components로 NewsItemBlock을 스타일링
// 이미지와 텍스트 영역(thumbnail과 contents)을 분리하여 구성

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
			margin-right: 1em;
			img {
				display: block;
				width: 160px;
				height: 100px;
				object-fit: cover;
			}
    }
    .contents {
			h2 {
				margin: 0;
				a {
					color: black;
				}
			}
			p {
				margin: 0;
				line-height: 1.5;
				margin-top: 0.5rem;
				white-space: normal;
			}
    }
		& + & {
			margin-top: 3em;
		}
`;

// NEWS API의 articles 배열에서 각 기사를 article 객체로 받아옴 (반복)
const NewsItems = ({article}) => {
  const {title, description, url, urlToImage} = article;
  return (
    <NewsItemBlock>
      {/* urlToImage가 있으면 */}
      {urlToImage && (
        // className 선택자
        <div className="thumbnail">
          {/* noopener : 새 탭으로 열리는 페이지가 원래 페이지의 객체를 조작하지 못하게 함 */}
          {/* noreferrer : noopener의 역할을 포함하면서 추가로 HTTP Referer 헤더(부모 페이지의 URL 정보) 제거 */}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItems;
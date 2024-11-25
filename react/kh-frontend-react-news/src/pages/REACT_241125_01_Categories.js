import styled, { css } from "styled-components";

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  // 화면 너비가 768픽셀 이하 적용
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto; //가로축에서 요소의 컨텐츠가 부모 요소의 너비를 초과할 경우 스크롤바 생성
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre; // 공백이나 줄바꿈이 있는 경우 그대로 표시
  text-decoration: none;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  ${(props) =>
    // props.active가 참이면(active이면) 아래 형식으로 스타일 재정의
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22bbcf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "연예",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = ({ onSelect, category }) => {
  // onClick이 눌리면 onSelect 함수가 불리며 부모(상위 컴포넌트, News)에게 값(category name)을 넘겨줌
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          // 선택된 카테고리(category prop)가 렌더링 중인 카테고리 c.name과 일치하면 active 속성이 true로 설정
          // 이 상태에서 스타일이 동적으로 변경됨
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
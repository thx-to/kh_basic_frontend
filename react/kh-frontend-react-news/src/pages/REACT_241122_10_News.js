import { useState, useCallback } from "react";
import NewsList from "./REACT_241122_13_NewsList";
import Categories from "./REACT_241125_01_Categories";

// News 컴포넌트 : 뉴스 페이지를 구성하는 최상위 컴포넌트
// NewsList를 포함하여 전체 기사 목록을 출력

const News = () => {

  const [category, setCategory] = useState("all");
  // 렌더링 될 때마다 onSelect가 새로 만들어짐 (주소가 바뀜)
  // onSelect의 주소가 바뀔 때마다 자식에게 변경된 주소가 계속 보내짐 (불필요하게 서버에 계속 다녀오게 됨)
  // useCallback 사용, 함수 자체를 전달함 / 자식 쪽에서 발생한 이벤트를 부모가 알아차릴 수 있음 / 이벤트는 자식, 상태 변경은 부모가 함
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
    {/* category로 상태값(현재 선택된 카테고리)을 넘기고, onSelect로 category를 선택할 수 있는 함수를 넘김 */}
    {/* 현재(초기값) 선택된 카테고리가 all, onClick이 일어나면 onSelect가 불려져 부모에게 category name을 넘기고 */}
    {/* setCategory가 바뀌고 결국 category가 바뀜, 렌더링 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

// 동작 1) News 컴포넌트 : 상태(category)를 관리하고, 선택된 카테고리에 따라 Categories와 NewsList를 업데이트
// 동작 2) News 컴포넌트 : onSelect 함수를 useCallback으로 생성하여 렌더링을 최적화함
// 동작 3) Categories 컴포넌트 : 전달받은 category와 onSelect를 활용해 카테고리 선택 UI 제공
// 동작 4) Categories 컴포넌트 : 클릭한 카테고리를 상위 컴포넌트로 전달해 상태를 업데이트
// 동작 5) NewsList 컴포넌트 : useEffect를 통해 선택된 카테고리에 따라 API 요청을 수행
// 동작 6) NewsList 컴포넌트 : API 요청 결과를 상태(articles)로 저장하고 이를 기반으로 뉴스 렌더링
// 동작 7) 외부 API 요청 : https://newsapi.org/v2/top-headlines 엔드포인트에 요청하여 뉴스 데이터를 가져옴
// 동작 8) 외부 API 요청 : 카테고리가 all인 경우 전체 데이터를 가져오고 그렇지 않으면 특정 카테고리에 대한 데이터 요청

export default News;
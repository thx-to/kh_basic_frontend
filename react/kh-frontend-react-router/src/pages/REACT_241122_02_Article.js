import { useParams } from "react-router-dom";

const Article = () => {
  
  // 구조분해를 해서 바로 ID를 빼옴
  const {id} = useParams();
  return (
    <>
    <h2>게시글 {id}</h2>
    </>
  );
};

export default Article;
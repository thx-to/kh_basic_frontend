import styled from "styled-components";
import { useState, useEffect } from "react";

const Table = styled.table`

  // 테이블 스타일 정의
  // 테이블 보더 한줄로 바꾸기
  border-collapse: collapse;
  background-color: #fdfdfd;
  text-align: center;
  width: 300px;
  th, td {
    border: 1px solid #ccc;
    padding: 4px 8px;
  }
  th {
    background-color: orangered;
    color: white;
  }
`;

// 데이터 배열
// 하드코딩된 데이터인 responseData를 setMemberData를 통해 상태로 설정
// 실제 API 호출시 fetch나 axios 사용하여 서버에서 데이터를 받아 옴
const responseData = [
  {
    id: 1,
    name: "MINJI",
    addr: "CHUNCHEON"
  },
  {
    id: 2,
    name: "HANNI",
    addr: "SEOUL"
  },
  {
    id: 3,
    name: "DANIELLE",
    addr: "JEJU"
  },
  {
    id: 4,
    name: "HAERIN",
    addr: "SUWON"
  },
  {
    id: 5,
    name: "HYEIN",
    addr: "DAEJEON"
  }
]

// 1) 상태 관리 : 초기값은 빈 배열로 설정, 비동기적으로 데이터를 가져온 후 업데이트됨
// 2) 데이터 로드 : 컴포넌트가 처음 렌더링될 때(마운트 시점) 실행
              // responseData를 가져와 memberData 상태 업데이트,
              // useEffect의 빈 배열[] 의존성 덕분에 한 번만 실행됨
              // 실제로는 서버에서 데이터를 가져오는 fetch 또는 axios 코드로 대체
const TableMap = () => {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    // 이 때 서버와 비동기 통신이 일어남
    setMemberData(responseData);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  }

  return (

    // 테이블 렌더링 구조
    <Table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>ADDRESS</th>
      </tr>
      {/* 중괄호가 아닌, 소괄호를 넣어줌 map(e=>()), 내부 구현되면 return 없이 자동반환 */}
      {/* 데이터가 없거나 아직 들어오지 않은 경우를 대비해 memberData && 으로 조건부를 걸어둠 */}
      {/* 현재 상태에서 데이터가 없으면 상단 th만 출력됨, 조건부가 빠지면 오류 출력 */}
      {memberData &&
        memberData.map((member) => (

          // 리액트에서 리스트를 렌더링할 때 각 항목에 대해 고유한 key 값을 넣어줘야 함
          // 유일한 값이 없다면 key = {index}로 작성, 배열의 인덱스로 적용됨
          // 리액트가 각 행을 고유하게 구분하기 위해
          // onClick으로 행을 클릭하면 해당 데이터를 콘솔에 출력하는 이벤트 핸들러 추가
          // item 매개변수는 map 함수로 생성된 각 member 객체를 의미함
          <tr key={member.id} onClick={() => handleTableRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );

};


export default TableMap;
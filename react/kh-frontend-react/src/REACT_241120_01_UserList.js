import REACT, { useState } from "react";
import styled from "styled-components";


const DivBox = styled.div`
  width: 310px;
  height: 150px;
  margin-bottom: 20px;
  background-color: orangered;
  color: white;
  margin: 20px auto;
  border-radius: 20px;
  border: 2px solid black;
  font-size: 1.1em;
  box-sizing: border-box;
  padding-left: 20px;
`

const User = ({ user }) => {
  return (
    <DivBox>
      <p>
        <b>ID</b> {user.id}
      </p>
      <p><b>NAME</b> {user.userName}</p>
      <p><b>MAIL</b> {user.email}</p>
    </DivBox>
  );
}

// 자바스크립트는 다음이 없어도 콤마를 넣어주는게 관례
const data = [

  {
    id: 100,
    userName: "HANNI",
    email: "hannipham@newjeans.com",
  },
  {
    id: 200,
    userName: "MINJI",
    email: "minjikim@newjeans.com",
  },
  {
    id: 300,
    userName: "DANIELLE",
    email: "modani@newjeans.com",
  },
  {
    id: 400,
    userName: "HAERIN",
    email: "haerinkang@newjeans.com",
  },
  {
    id: 500,
    userName: "HYEIN",
    email: "hyeinlee@newjeans.com",
  },

];


const UserList = () => {

  return (
    <>
      {/* 데이터가 있으면, && 논리 연산자로 앞의 조건이 참이면 뒤의 내용 실행, 아니면 아무 작업도 안함 */}
      {/* 키값을 넣어줘야만이 리액트가 각 컴포넌트를 효율적으로 렌더링하고 재조정함 (안넣어주면 성능 저하) */}
      {/* 중복되는 값을 키로 넣으면 중복 데이터는 출력되지 않음 (치명적임) */}
      {/* 고유한 값이 없다면 인덱스로 넣기 key={index} 방식 */}
      {data && data.map((user) => <User key={user.id} user={user} />)}
    </>
  );

};

export default UserList;
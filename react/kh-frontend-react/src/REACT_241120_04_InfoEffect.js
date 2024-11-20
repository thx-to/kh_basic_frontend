import { useState, useEffect } from "react";

const InfoEffect = () => {
  
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect (() => { // 콜백함수
    console.log("렌더링 완료");
    console.log({name, nickName});
  });

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickName = e => {
    setNickName(e.target.value);
  }

  return (
    <>
      <>
        <input value={name} onChange={onChangeName} placeholder="NAME" />
        <br />
        <input
          value={nickName}
          onChange={onChangeNickName}
          placeholder="NICKNAME"
        />
        <br />
      </>
      <br />
      <>
        <>
          <b>👉 NAME : </b> {name}
          <br />
        </>
        <>
          <b>👉 NICKNAME : </b> {nickName}
          <br />
        </>
      </>
    </>
  );

};

export default InfoEffect;
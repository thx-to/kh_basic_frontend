import { useState } from "react";

const EventPractice = () => {

  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  // 한줄짜리 코드라 중괄호 생략 가능
  const changeMsg = e => setMessage(e.target.value);
  const onChangeUserName = e => setUserName(e.target.value);

  const onClick = () => {
    alert(`${userName} : ${message}`);
    // 입력창 비우기
    setUserName("");
    setMessage("");
  }

  // Enter Key가 입력되면 onClick() 호출
  const onKeyPress = e => {
    if (e.key === "Enter") onClick();
  }

  return (
    <>
    <h1>EVENT PRACTICE</h1>
    {/* onChange 이벤트는 매개변수로 들어가도 생략 가능, 원래 식은 onChange={(e) => changeMsg(e)} */}
    <input type="text" placeholder="NAME" onChange={onChangeUserName} value={userName} />
    <input type="text" placeholder="WRITE ANYTHING" onChange={changeMsg} onKeyDown={onKeyPress} value={message} />
    <button onClick={onClick}>CONFIRM</button>
    </>
  );
};

export default EventPractice;
// Hooks 연습문제(useState 사용)
// 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력받아
// 제출 버튼을 누르면 한번에 출력하기

import { useState  } from "react";

const ShowInfo = ({info}) => {
  return (
    <>
      <h3>입력된 회원 정보</h3>
      <p>이름 : {info.name}</p>
      <p>직책 : {info.position}</p>
      <p>회사명 : {info.company}</p>
      <p>회사주소 : {info.addr}</p>
      <p>메일 : {info.mail}</p>
      <p>전화번호 : {info.phone}</p>
    </>
  );
};

const HooksPractice = () => {

  const [info, setInfo] = useState({
    name: "",
    position: "",
    company: "",
    addr: "",
    mail: "",
    phone: "",
  });

  // submit은 false로 초기화된 상태 변수
  // 사용자가 폼을 제출했는지를 추적하는데 사용됨
  // setSubmit은 상태를 변경하는 함수, 나중에 제출 버튼이 클릭될 때 호출됨
  const [submit, setSubmit] = useState(false);

  // e.target.value 대신 매개변수로 key와 value로 받음
  // 하나의 함수로 뽑아내기 위함
  // 객체의 property, value
  const onChange = (key, value) => {
    // 계산된 속성명 : ES6에서 추가
    // 대괄호[] 안에 표현식을 넣으면 됨
    setInfo({...info, [key]: value});
  };

  // onSubmit 함수는 버튼 클릭시 호출됨
  // 이 함수가 실행되면 setSubmit(true)가 호출되어 submit 상태값이 true로 바뀜
  const onSubmit = () => {
    setSubmit(true);
  }


  return (
    <>
      <h1>회원 정보</h1>
      <input
        type="text"
        placeholder="이름"
        value={info.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="직책"
        value={info.position}
        onChange={(e) => onChange("position", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="회사명"
        value={info.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="회사주소"
        value={info.addr}
        onChange={(e) => onChange("addr", e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="이메일"
        value={info.mail}
        onChange={(e) => onChange("mail", e.target.value)}
      />
      <br />
      <input
        type="tel"
        placeholder="전화번호"
        value={info.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <br />
      {/* 조건부 렌더링, submit이 true일 때만 <ShowInfo info={info}> 컴포넌트가 렌더링됨 */}
      <button onClick={onSubmit}>제출</button>
      {submit && <ShowInfo info={info} />}
    </>
  );
};

export default HooksPractice;
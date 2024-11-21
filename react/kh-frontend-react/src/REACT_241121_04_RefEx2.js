import { useRef, useEffect } from "react";

const KeepInnerValue = () => {
  // myButtonRef로 버튼 텍스트 변경 : useRef(null)로 myButtonRef를 만들고, useEffect 훅을 사용하여 컴포넌트가 마운트될 때 버튼의 innerText를 Click!으로 설정
  // myButtonRef.current는 버튼 DOM 요소 참조, myButtonRef.current.innerText = "Click!"을 통해 버튼 텍스트 업데이트
  // useRef를 사용하여 특정한 DOM 요소에 접근(특정한 DOM 위치를 가리킴), 초기값은 null로 아직 가리키는 대상이 없음
  // useRef로 생성되어 컴포넌트의 리렌더링 간에 값을 유지함, useRef는 변경된 값이 컴포넌트를 리렌더링하지 않게 함
  const myButtonRef = useRef(null);

  // 컴포넌트가 처음 마운트된 후에 버튼 텍스트 업데이트
  // 의존성 배열이 빈 배열[], 컴포넌트가 처음 렌더링된 후 한 번만 실행
  useEffect(() => {
    if (myButtonRef.current) {
      myButtonRef.current.innerText = "Click!";
    }
  }, []);

  // count로 클릭 횟수 추적
  // count.current는 리렌더링 없이 증가, alert()를 통해 클릭 횟수 표시
  // 컴포넌트 내부 변수값 유지 (카운트 초기값 0)
  // useRef로 생성되어 컴포넌트의 리렌더링 간에 값을 유지함, useRef는 변경된 값이 컴포넌트를 리렌더링하지 않게 함
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    alert(`${count.current} CLICKS OCCURED`);
  };

  return (
    <>
      <button ref={myButtonRef} onClick={handleClick}>
        INITIAL STATUS
      </button>
    </>
  );
};

// useRef를 사용하여 리렌더링 없이 DOM 요소의 텍스트를 변경하고 컴포넌트의 상태값을 유지하며 클릭 횟수 추적
export default KeepInnerValue;
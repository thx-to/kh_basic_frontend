import { useRef  } from "react";

const CreateRef = () => {

  // useRef 참조 객체 만들기, 현재는 참조 객체(참조하는 값, 참조하는 DOM 요소)가 없음(null)
  // useRef(null)은 참조 생성, DOM 요소 <input />에 대한 참조를 가짐, 초기 값 null, DOM 요소 렌더링 이후 참조 할당
  const inputRef = useRef(null);

  // handleFocus 함수 : 버튼 클릭 시 실행
  // inputRef.current.disabled = false를 통해 input 요소의 disabled 속성을 false로 설정, 비활성화된 입력 필드를 활성화함
  // inputRef.current.focus()로 입력 필드에 포커스를 주어 사용자가 바로 입력할 수 있도록 함
  // current : 값을 유지하기 위해 넣어줌 (없으면 렌더링될 때 값이 변경됨) currnt를 넣고 그 밑에 값을 넣어줌 / 처음 참조한 값을 저장함
  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  return (
    <>

    {/* ref={inputRef} input 요소에 ref를 설정하여 해당 DOM 요소를 참조, inputRef.current는 input 요소를 가리키게 됨 */}
    <input disabled type="text" ref={inputRef} />

    {/* 버튼 클릭시 handleFocus 함수 실행, input 필드를 활성화하고 포커스 설정 */}
    <button onClick={handleFocus}>ACTIVATE</button>

    </>
  );
};

export default CreateRef;
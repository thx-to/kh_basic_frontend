import { useState } from "react";

const TodoList = () => {

  // useState 배열에 객체 4개를 넣고 시작
  // names : 할 일 목록을 저장하는 상태
  // names 배열의 초기값에 아래 4개의 객체가 이미 들어가 있음
  // 각 항목은 id와 text 값을 가진 객체로 구성되어 있음
  const [names, setNames] = useState([
    {id: 1, text: "HTML Practice"},
    {id: 2, text: "CSS Practice"},
    {id: 3, text: "JavaScript Practice"},
    {id: 4, text: "React Project"},
  ]);

  // inputText : 사용자가 입력한 텍스트를 저장하는 상태
  // input 필드에 사용자가 입력한 값이 이 상태에 저장됨
  const [inputText, setInputText] = useState("");

  // nextID : 할 일 목록에 추가될 항목의 고유 id를 관리하는 상태
  // 현재 id가 1~4까지 있으니, 새 id는 5부터 시작
  // 항목이 추가될 때마다 nextID가 1씩 증가함
  const [nextID, setNextID] = useState(5);

  // e(event)는 이벤트 객체와 그 속성을 나타내는 개념
  // 이벤트가 발생한 지점에서 넘어옴 (이벤트 핸들러 함수에 자동으로 전달되는 이벤트 객체)
  // 이벤트 발생 정보(종류, 위치, 시점 등), 이벤트 대상(DOM 요소) 정보(HTML요소 정보 포함), 기타 유용한 메소드(preventDefault 등) 제공
  // target은 이벤트가 발생한 구체적인 DOM 요소(이벤트가 바로 발생한 HTML 태그 참조)
  // target의 주요 역할 : 이벤트가 발생한 요소에 접근, HTML 요소의 속성(id, name 등)/값(value)에 접근
  // e.target.value : 이벤트가 발생한 폼 요소의 값(input 필드에 입력된 값을 가져옴)
  // onChange 이벤트는 인풋창에서 넘어옴 (input 필드에 입력된 값이 inputText 상태에 저장됨)
  // 아래 코드는 input 요소에 입력한 값을 상태로 업데이트하는 역할을 함
  // input에 값 입력 > onChange 이벤트 발생 > 리액트는 이벤트 객체 e를 핸들러 함수 onChange에 전달
  // > e.target은 이벤트가 발생한 input 요소 참조 > e.target.value는 사용자가 입력한 값을 가져옴
  // > setInputText로 상태 업데이트
  const onChange = e => setInputText(e.target.value);

  // onClick이 일어났을 때(버튼 클릭시) 입력받은 내용 추가(id, text)해서 새로운 배열을 만들고 setNames에 넣으니까 렌더링되면서 내용이 바뀜
  const onClick = () => {

    // concat을 안넣고 names에 함수를 넣으면 들어는 가는데 불변성의 원칙에 위배됨 (주소가 달라짐)
    // concat으로 기존 names를 업데이트(새 배열 반환) > 렌더링이 일어남
    // concat 또는 전개연산자(...) 사용
    // push나 pop으로 주소가 바뀌지 않으니까 하면 렌더링이 일어나지 않음 (파괴적 메소드로 배열 변경, 배열의 참조값인 주소는 유지됨)
    // 불변성의 원칙 1) : 기존 상태를 직접 변경하지 않고 새로운 상태를 생성하여 업데이트해야 함
    // 불변성의 원칙 2) : 불변성을 유지하면 상태 변경 추적이 쉬워지고 렌더링 동작 예측 가능해짐
    // 불변성의 원칙 3) : 리액트는 상태가 변경되었는지 판단할 때 주소를 비교
    // 불변성의 원칙 4) : 불변성을 유지하면 새 객체나 배열 생성, 참조값 변경되고 리액트는 이를 감지하여 렌더링 트리거
    // 불변성의 원칙 5) : 기존 데이터를 직접 변경하면 참조값 유지, 리액트는 상태가 변경되지 않았다고 판단하여 렌더링하지 않음
    // 참조값인 주소만 보고도 렌더링 여부 판단 가능

    // concat 사용 코드
    // const nextNames = names.concat({id: nextID, text: inputText});

    // 전개연산자 사용 코드
    // 현재 names 배열을 복사해 nextID와 inputText를 추가한 새로운 배열을 만듦
    const nextNames = [...names, { id: nextID, text: inputText }];

    // 첫번째 렌더링
    // 기존 nextID는 5가 들어가 있는 상태, ID값을 계속 증가시켜나가 다음 항목에 사용할 고유 id 준비
    setNextID(nextID + 1);

    // 두번째 렌더링
    // setNames를 통한 상태 업데이트
    // TodoList 갱신 (nextNames 배열로 names 상태 업데이트)
    setNames(nextNames);

    // 세번째 렌더링
    // 이렇게 하면 렌더링이 연속으로 3번 일어나게됨
    // useState를 너무 많이 하게 되면 안좋음 (리소스 낭비, 성능에 영향)
    // 2~3개 하는 정도는 괜찮은데, 전체적으로 썩 좋은 구조는 아님
    // 입력창 초기화
    setInputText("");

  };


    // 그려 주는 부분
    return (
      <>
      {/* onChange 함수가 입력 필드에 적용되어, 사용자가 입력할 때마다 inputText 상태 업데이트 */}
      <input value={inputText} onChange={onChange} />

      {/* 클릭시 onClick 함수 실행 */}
      <button onClick={onClick}>ADD</button>

      {/* names 배열의 항목을 map을 이용해 렌더링, 각 항목은 li 태그로 출력되며 key={name.id}로 각 항목을 고유하게 식별 */}
      <ul>
        
        {/* name => () 에 소괄호를 넣는 이유는 자동 반환이 일어나기 때문, 중괄호를 넣으면 return문 필요 */}
        {names && names.map(name => (
          <li key={name.id}>{name.text}</li>
        ))}
      </ul>
      </>
    );
};

// 전체 동작
// 1) 사용자가 input 필드에 텍스트 입력 후 ADD 버튼 클릭하면 onClick 함수 실행
// 2) onClick 함수는 새로운 할 일을 names 배열에 추가하고, nextID를 증가시켜 새로운 항목에 고유한 id 할당
// 3) names 상태가 업데이트되면 컴포넌트 리렌더링되어 새로운 할 일이 화면에 추가됨
// 4) input 필드 초기화

export default TodoList;
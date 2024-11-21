// useReducer : 복잡한 로직을 가진 상태를 관리하는데 사용
// 리액트에서는 파일 이름과 컴포넌트 이름이 달라도 됨 (자바는 파일 이름과 클래스 이름이 동일해야 함)

import { useReducer } from "react";

// reducer 함수
// state : 현재 상태
// action : 상태 업데이트를 요청하는 객체, 일반적으로 type 속성 포함
// action.type에 따라 상태 변경 (INCREMENT : value + 1 / DECREMENT : value - 1 / default : 기존 상태 유지 (정의되지 않은 액션 처리를 위함)
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT" :
      return {value:state.value + 1};
    case "DECREMENT" :
      return {value:state.value -1};
    default :
      return state;
  }
};


// 동작에 대한 상태를 업데이트하는 로직(reducer)을 외부에 만들어서 씀
const ReducerCnt = () => {
  // useReducer(reducer, initialState)로 상태 관리
  // reducer : 상태 업데이트 로직을 정의한 함수
  // initialState : 초기 상태 ({value : 0})
  // state : 현재 상태 개체 ({value : 0})
  // dispatch : 액션을 리듀서에 전달하는 함수
  // state 안에 객체로 value를 넣었기 때문에 아래 state.value라고 씀
  // 원래 setter 함수자리에 dispatch, 동작에 대한 조건식을 넣어줄 수 있음
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // 상태 표시 : state.value를 이용해 현재 상태를 화면에 표시
  // 버튼 이벤트 1) dispatch({type : "INCREMENT"}) 리듀서에 {type:"INCREMENT"} 액션 전달
  // 버튼 이벤트 2) dispatch({type : "DECREMENT"}) 리듀서에 {type:"DECREMENT"} 액션 전달
  // 버튼 클릭 시 리듀서가 호출되고 상태 업데이트
  return (
    <>
      <p>현재 카운트 값은 {state.value}</p>
      {/* onClick이 일어나면 dispatch를 호출 */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
    </>
  );
}

// 동작
// 1) 컴포넌트가 렌더링되면 초기 상태는 {value : 0}
// 2) + 버튼 클릭 > dispatch가 INCREMENT 액션 전달
// 3) 리듀서가 value를 1 증가시키고 새 상태를 반환
// 4) 새 상태로 컴포넌트 리렌더링

export default ReducerCnt;
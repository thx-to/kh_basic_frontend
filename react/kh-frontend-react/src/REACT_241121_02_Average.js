import { useState, useMemo, useCallback } from "react";

// getAverage 함수 : 입력받은 배열(numbers)의 평균값을 계산하는 함수
// 최종적으로 합계를 배열 길이로 나눠 평균값을 반환
const getAverage = numbers => {

  // 디버깅 또는 성능 최적화를 위한 디버그 코드
  // 컴포넌트의 리렌더링 확인 : 렌더링시 getAverage 함수 호출, 이 로그를 통해 평균값 계산 로직이 몇 번 실행되었는지 파악
  // 함수 호출 시점 파악 : 특정 사용자 동작 이후 함수가 올바르게 호출되는지 확인
  // 개발 중 문제 추적 : 예상치 못한 문제 발생시 원인 구분
  console.log("평균값 계산 중");

  // 배열이 0이라면 입력된게 없으니 0 반환
  // 방어코드 : 내부가 수행될 필요가 없기 떄문에 여기서 바로 반환, 실행해야 할 필요가 있을 때만 내려감
  if(numbers.length === 0) return 0;

  // reduce() : 두 개의 입력을 받아서 누적된 값을 계산하거나 하나의 값으로 축약 (결과가 다음 a에 대입되고 새로운 b값이 들어옴)
  const sum = numbers.reduce((a, b) => a + b);

  // 합계를 배열의 길이로 나눠 평균값 반환
  return sum / numbers.length;

}


// Average 컴포넌트
const Average = () => {

  // useState를 이용해 상태 관리
  // list : 숫자 목록 상태 (배열 형태)
  // number : 입력값 상태 (문자열 형태)
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // onChange 이벤트 핸들러 : 사용자가 입력한 값을 number 상태로 업데이트
  // useCallback으로 리렌더링되더라도 onChange 함수를 다시 만들지 않게 함
  // 성능 개선 효과가 미미하고, onChange가 다시 불려져도 메모리 소모가 크지 않아 효용이 떨어짐
  // 특히 자식 컴포넌트가 부모 컴포넌트로부터 함수를 props로 받는 경우 등 불필요한 렌더링이 많이 일어날 때만 쓰임
  // useCallback으로 onChange 함수를 메모이제이션하여 olnChange가 의존성 배열[]에 있는 값이 변경되지 않는 한 동일한 함수 재사용
  // 현재 의존성 배열이 비어 있기 때문에 onChange 함수는 컴포넌트가 처음 렌더링된 후 한 번만 생성되고 이후에는 같은 함수 객체 재사용
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // onInsert 이벤트 핸들러 : 입력값을 정수 형태로 변환(parseInt) 후 기존 배열(list)에 추가
  const onInsert = useCallback((e) => {

    // parseInt는 값(Striing)을 정수(Integer)로 바꿔주는 것 (여기서 문자열""로 들어온 숫자를 정수값으로 변환)
    // 기존 배열에 정수값을 추가해서 새로운 배열을 만듦 (concat 비파괴적 메소드 불변성 유지)
    const nextList = list.concat(parseInt(number));

    // 새로 만들어진 배열로 상태 변경
    setList(nextList);

    // 입력창 비우기
    setNumber("");

    // onInsert 함수 내부에서 list 상태를 참조하고 있기 때문에 의존성 배열에 list 추가
    // list가 변경되면 새로운 list 값을 반영한 함수가 필요
    // list는 onInsert 함수에서 사용되는 상태 변수, list가 변경되면 onInsert 함수도 변경된 list 값 반영
    // number도 onInsert 함수에서 사용되므로 의존성 배열에 포함
    // list를 배열에 넣지 않으면) onInsert 처음 렌더링될 때만 생성, list가 변경되어도 함수 업데이트가 없어서 list의 최신값이 반영되지 않음
  }, [list, number]);

  // 특정 조건에서만 값을 받게끔 하는 함수
  // useMemo를 사용해 특정 조건에서만 값을 계산하게 함 (React의 성능 최적화 도구, 불필요한 계산을 방지하고 이전 계산 결과를 기억함)
  // useMemo 동작 원리 1) 첫 번째 매개변수인 함수 getAverage(list)를 실행해 결과 캐싱
  // useMemo 동작 원리 2) 두 번째 매개변수인 의존성 배열 [list]에 있는 값이 변경될 때만 함수 다시 실행, 변경되지 않으면 이전 계산값 반환
  const avg = useMemo(()=>getAverage(list), [list]);

  // 렌더링 구조 (화면 그려주기)
  return (
    <>
      {/* 입력값 변경시 onChange 호출 */}
      {/* 여기서 onChange는 등록, 이벤트가 발생했을 때 알아서 불러줘야 함 (호출(소괄호를 붙임)이 아님) */}
      <input value={number} onChange={onChange} />

      {/* 등록 버튼 클릭시 onInsert 호출 */}
      <button onClick={onInsert}>등록</button>

      {/* 숫자 목록(list) 렌더링 */}
      {/* map()을 사용하여 각 숫자를 <li> 태그로 변환 */}
      {/* key 속성 : 배열의 인덱스를 사용해 각 리스트 아이템 고유 식별 */}
      <ul>{list && list.map((val, index) => <li key={index}>{val}</li>)}</ul>
      <>

        {/* getAverage(list)를 호출해 현재 숫자 목록의 평균값을 계산 */}
        <b>평균값 : </b>
        {avg}
      </>
    </>
  );
}

// 전체 동작
// 1) 사용자가 숫자 입력
// 2) 등록 버튼 클릭시 입력값이 숫자로 변환되어 배열(list)에 추가
// 3) 입력 필드 초기화
// 4) 현재 숫자 목록(list)과 평균값이 실시간으로 화면에 렌더링
export default Average;
import { useState } from "react";

const DropdownComponent = () => {

  const [selectedValue, setSelectedValue] = useState("NONE");

  const handleChange = e => {
    setSelectedValue(e.target.value);
  };

  // 배열을 사용해 넣어보기
  // 아래처럼 하드코딩으로 넣는 것 보다 배열을 활용하는게 더 이상적인 방법
  const fruits = ["apple", "banana", "grape", "watermelon"]

  return (
    <>
      <h2>Dropdown Menu</h2>

      {/* 이벤트에 대한 상태관리를 useState로 하겠다 */}
      <select value={selectedValue} onChange={handleChange}>
        <option value="NONE" disabled>
          👉 SELECT FRUIT
        </option>

        <option value="🍎">　　APPLE</option>
        <option value="🍌">　　BANANA</option>
        <option value="🍇">　　GRAPE</option>
        <option value="🍉">　　WATERMELON</option>

        {/* 배열로 넣기
        <option value={fruits[0]}>사과</option>
        <option value={fruits[1]}>바나나</option>
        <option value={fruits[2]}>포도</option>
        <option value={fruits[3]}>수박</option> */}
      </select>
      <p>SELECTED FRUIT : {selectedValue}</p>
    </>
  );

};

export default DropdownComponent;
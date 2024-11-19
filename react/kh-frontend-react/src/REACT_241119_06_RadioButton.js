import { useState } from "react";

const RadioButton = () => {

  const [selectedValue, setSelectedValue] = useState("NONE");

  const handleChange = e => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <h2>Radio Button</h2>

      <label htmlFor="strawberry">
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="🍓"
          onChange={handleChange}
        />
        STRAWBERRY
      </label>
      <br />
      <label htmlFor="orange">
        <input
          type="radio"
          name="fruits"
          id="orange"
          value="🍊"
          onChange={handleChange}
        />
        ORANGE
      </label>
      <br />
      <label htmlFor="pineapple">
        <input
          type="radio"
          name="fruits"
          id="pineapple"
          value="🍍"
          onChange={handleChange}
        />
        PINEAPPLE
      </label>
      <br />
      <label htmlFor="kiwi">
        <input
          type="radio"
          name="fruits"
          id="kiwi"
          value="🥝"
          onChange={handleChange}
        />
        KIWI
      </label>
      <br />
      <p>SELECTED FRUIT : {selectedValue}</p>
    </>
  );

}

export default RadioButton;
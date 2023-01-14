import React, { useState } from "react";
import DropDown from "../../components/DropDown";

const DropDownPage = () => {
  const [selection, setSelection] = useState(null);
  const options = [
    { option: "RED", value: "opt1" },
    { option: "GREEN", value: "opt2" },
    { option: "BLUE", value: "opt3" },
  ];
  return (
    <DropDown options={options} value={selection} onChange={handleSelect} />
  );
};

export default DropDownPage;

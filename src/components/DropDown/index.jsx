import React, { useEffect, useRef, useState } from "react";
import { CaretDoubleDown, CaretDoubleLeft } from "phosphor-react";
import "./styles.scss";

const DropDown = ({ options, value, onChange }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handler, true);
  }, []);
  const handleSelect = (option) => {
    setExpanded(false);
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        className="drop-down__option"
        onClick={() => handleSelect(option)}
      >
        {option.option}{" "}
      </div>
    );
  });
  return (
    <div ref={ref} className="drop-down w-25 position-absolute">
      <div
        onClick={() => {
          setExpanded(!expanded);
        }}
        className={`drop-down__select ${value?.option} d-flex align-items-center`}
      >
        {value?.option || "Select ..."}{" "}
        {expanded ? (
          <span className="ms-auto">
            <CaretDoubleDown size={24} weight="bold" />
          </span>
        ) : (
          <span className="ms-auto">
            <CaretDoubleLeft
              size={24}
              className={`${value?.option} ms-auto`}
              weight="bold"
            />
          </span>
        )}
      </div>
      <div
        className={`drop-down__options-list ${
          expanded && "expanded"
        } position-absolute`}
      >
        {renderedOptions}
      </div>
    </div>
  );
};

export default DropDown;

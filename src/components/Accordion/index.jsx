import React, { useState } from "react";
import "./styles.scss";
import { CaretDoubleLeft, CaretDoubleDown } from "phosphor-react";

const Accordion = ({ contents }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  const renderedItems = contents.map((content, index) => {
    const expanded = index === expandedIndex;
    return (
      <div key={content.id} className="accordion row">
        <div
          onClick={() => handleClick(index)}
          className="accordion__label d-flex px-5 py-3 "
        >
          {content.label}
          <span className="accordion__icon ms-auto">
            {expanded ? (
              <CaretDoubleDown size={24} color="#323895" />
            ) : (
              <CaretDoubleLeft size={24} color="#323895" />
            )}
          </span>
        </div>

        {expanded && (
          <div className="accordion__content--container">
            <div className="accordion__content ">{content.desc}</div>
            {expandedIndex !== contents.length - 1 && (
              <div className="border-bottom mx-auto"></div>
            )}
          </div>
        )}
      </div>
    );
  });
  return (
    <div className="accordion__container w-50 container position-absolute">
      {renderedItems}
    </div>
  );
};

export default Accordion;

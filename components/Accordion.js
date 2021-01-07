import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import { SPACING, COLOURS, FONT_SIZE, BORDER_RADIUS, SHADOWS } from "../styles";

const Accordion = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map(({ title, content }, index) => (
        <div key={`accordion-item-${index}`} className="accordion__item">
          <button
            className="accordion__button"
            onClick={() => handleClick(index)}
          >
            <div className="accordion__icon-container">
              {selectedIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {title}
          </button>
          <div
            className={`accordion__content ${
              selectedIndex === index ? "accordion__content--active" : ""
            }`}
          >
            {typeof content === "function" ? content() : content}
          </div>
        </div>
      ))}

      <style jsx>{`
        .accordion {
          border-radius: ${BORDER_RADIUS};
          box-shadow: ${SHADOWS.light};
          width: 100%;
          border: 1px solid ${COLOURS.grey};
        }

        .accordion__item:not(:last-child) {
          border-bottom: 1px solid ${COLOURS.grey};
        }

        .accordion__button {
          display: flex;
          align-items: center;
          text-align: left;
          border: none;
          width: 100%;
          background-color: ${COLOURS.darkGrey};
          font-size: ${FONT_SIZE.medium};
          font-weight: bold;
          padding: ${SPACING.medium};
          cursor: pointer;
          color: ${COLOURS.white};
        }

        .accordion__icon-container {
          flex-grow: 0;
          flex-shrink: 0;
          margin-right: ${SPACING.medium};
        }

        .accordion__content {
          width: 100%;
          padding: ${SPACING.medium};
          background-color: ${COLOURS.darkGrey};
          display: none;
          font-size: ${FONT_SIZE.small};
        }

        .accordion__content--active {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Accordion;

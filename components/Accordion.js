import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import {
  SPACING,
  COLOURS,
  FONT_SIZE,
  BORDER_RADIUS,
  SHADOWS,
  BREAKPOINTS
} from "../styles";

const Accordion = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map(({ title, content }, index) => (
        <>
          <button
            key={`accordion-button-${index}`}
            className={`accordion__button ${
              selectedIndex === index ? "accordion__button--active" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            {selectedIndex === index ? (
              <FaChevronUp style={{ marginRight: SPACING.medium }} />
            ) : (
              <FaChevronDown style={{ marginRight: SPACING.medium }} />
            )}
            {title}
          </button>
          <div
            className={`accordion__content ${
              selectedIndex === index ? "accordion__content--active" : ""
            }`}
          >
            {typeof content === "function" ? content() : content}
          </div>
        </>
      ))}

      <style jsx>{`
        .accordion {
          border-radius: ${BORDER_RADIUS};
          box-shadow: ${SHADOWS.light};
          width: 100%;
        }

        .accordion__button {
          display: block;
          text-align: left;
          border: none;
          width: 100%;
          background-color: ${COLOURS.lightGrey};
          font-size: ${FONT_SIZE.medium};
          padding: ${SPACING.medium};
          cursor: pointer;
        }

        .accordion__button-icon {
          margin-right: ${SPACING.medium};
        }

        .accordion__button--active {
          background-color: ${COLOURS.white};
        }

        .accordion__content {
          flex-grow: 1;
          width: 100%;
          padding: 0;
          height: 0;
          visibility: hidden;
        }

        .accordion__content--active {
          height: auto;
          visibility: visible;
          padding: ${SPACING.medium};
        }

        @media (max-width: ${BREAKPOINTS.mobile}) {
          .accordion {
            flex-direction: column;
          }

          .accordion__button-container {
            flex-basis: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Accordion;

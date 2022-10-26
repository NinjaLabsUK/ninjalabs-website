import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import styles from "./Accordion.module.css";

const Accordion = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map(({ title, content }, index) => (
        <div key={`accordion-item-${index}`} className={styles.accordionItem}>
          <button
            className={styles.accordionButton}
            onClick={() => handleClick(index)}
          >
            <div className={styles.accordionIconContainer}>
              {selectedIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {title}
          </button>
          <div
            className={`${styles.accordionContent} ${
              selectedIndex === index && styles.accordionContentActive
            }`}
          >
            {typeof content === "function" ? content() : content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

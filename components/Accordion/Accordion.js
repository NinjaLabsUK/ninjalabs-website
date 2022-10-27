import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import styles from "./Accordion.module.css";

const Accordion = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map(({ title, content }, index) => (
        <div key={`accordion-item-${index}`} className={styles.item}>
          <button className={styles.button} onClick={() => handleClick(index)}>
            <div className={styles.iconContainer}>
              {selectedIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {title}
          </button>
          <div
            className={`${styles.content} ${
              selectedIndex === index && styles.contentActive
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

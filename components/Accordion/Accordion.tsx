import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import styles from "./Accordion.module.css";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items = [] }) => {
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
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

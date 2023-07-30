import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./ExpandableImage.module.css";

type ExpandableImageProps = {
  src: string;
  alt?: string;
};

const variants = {
  default: {
    width: "100%",
  },
  expanded: {
    width: "750px",
  },
};

const ExpandableImage: React.FC<ExpandableImageProps> = ({ src, alt = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLImageElement>) => {
    if (ev.code === "Space") {
      ev.preventDefault();
      return handleClick();
    }

    if (ev.code === "Escape") {
      ev.preventDefault();
      return setIsExpanded(false);
    }
  };

  return (
    <div className={styles.container}>
      <motion.img
        src={src}
        alt={alt}
        className={styles.img}
        variants={variants}
        animate={isExpanded ? "expanded" : "default"}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      />
      {isExpanded && <p className={styles.message}>Click to close</p>}
    </div>
  );
};

export default ExpandableImage;

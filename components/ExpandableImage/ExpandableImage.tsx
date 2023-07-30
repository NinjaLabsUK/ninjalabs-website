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

  const openImage = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={openImage}>
      <motion.img
        src={src}
        alt={alt}
        className={styles.img}
        variants={variants}
        animate={isExpanded ? "expanded" : "default"}
      />
      {isExpanded && <p className={styles.message}>Click to close</p>}
    </div>
  );
};

export default ExpandableImage;

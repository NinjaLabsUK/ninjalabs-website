import { FaChevronRight } from "react-icons/fa";

import Button from "../../../components/Button/Button";
import ExpandableImage from "../../../components/ExpandableImage";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.thumbnail}>
        <ExpandableImage src="img/rf2.jpg" alt="rFactor racing simulator" />
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>Sim Racing Overlay</h2>
        <p className={styles.text}>
          Broadcasting overlay built in React. Integrates with OBS to provide
          viewers with a real-time race overview.
        </p>
        <Button
          text="View Project"
          variant="tertiary"
          size="large"
          endSlot={<FaChevronRight size="14px" />}
          href="https://rf2.ninja-labs.co.uk"
        />
      </div>
    </div>
  );
};

export default Project;

import { useState } from "react";

import FastestLap from "../FastestLap/FastestLap";
import Button from "../../../../components/Button/Button";
import styles from "./AnimationShowcase.module.css";

const ProjectExtra = () => {
  const [animationKey, setAnimationKey] = useState(1);

  const onReplay = () => {
    setAnimationKey(animationKey + 1);
  };

  return (
    <div className={styles.container}>
      <div style={{ flexShrink: 0, flexBasis: "520px" }}>
        <h2>Built with Framer Motion</h2>

        <p className={styles.description}>
          Position changes and fastest lap animated with Framer Motion to keep
          the viewer up to date.
        </p>

        <div className={styles.showcase}>
          <FastestLap
            key={`fastest-lap-anim-${animationKey}`}
            firstName="Kieran"
            lastName="Chadwick"
            lapTime="1:24.543"
          />
        </div>

        <Button text="Replay animation" variant="link" onClick={onReplay} />
      </div>
    </div>
  );
};

export default ProjectExtra;

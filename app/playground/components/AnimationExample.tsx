"use client";

import { useState } from "react";
import { motion } from "motion/react";

import InputSlider from "../../../components/InputSlider/InputSlider";
import styles from "./AnimationExample.module.css";

const AnimationExample: React.FC<{}> = () => {
  const [animate, setAnimate] = useState({ x: 0, y: 0, rotation: 0 });

  return (
    <div className={styles.container}>
      <motion.div
        animate={{ x: animate.x, y: animate.y, rotate: animate.rotation }}
        className={styles.box}
      >
        <ul>
          <li>X: {animate.x}</li>
          <li>Y: {animate.y}</li>
          <li>Rotation: {animate.rotation}</li>
        </ul>
      </motion.div>

      <div className={styles.controls}>
        <InputSlider
          label="X"
          value={animate.x}
          onChange={(val) => setAnimate({ ...animate, x: val })}
        />
        <InputSlider
          label="Y"
          value={animate.y}
          onChange={(val) => setAnimate({ ...animate, y: val })}
        />
        <InputSlider
          label="R"
          min={0}
          max={360}
          value={animate.rotation}
          onChange={(val) => setAnimate({ ...animate, rotation: val })}
        />
      </div>
    </div>
  );
};

export default AnimationExample;

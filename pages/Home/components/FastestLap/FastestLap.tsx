import React from "react";
import { motion } from "motion/react";

import styles from "./FastestLap.module.css";

const STYLE_VARS = {
  colorWhite: "#ffffff",
  colorPrimary: "#072047",
  colorPrimaryDark: "#000b1c",
  colorDestructive: "#6c0cb3",
  colorConstructive: "#1cad10",
  colorPurple: "#6c0cb3",
  colorPink: "#cd04db",
};

const INITIAL_WIDTH = 200;

const DEFAULT_SPRING = {
  type: "spring",
  damping: 10,
  stiffness: 30,
};

interface FastestLapProps {
  firstName: string;
  lastName: string;
  lapTime: string;
}

const FastestLap = ({ firstName, lastName, lapTime }: FastestLapProps) => (
  <motion.div
    initial={{ y: -150, x: 150, opacity: 0 }}
    animate={{ y: 0, x: 0, opacity: 1 }}
    transition={{
      ...DEFAULT_SPRING,
      delay: 1,
      x: {
        ...DEFAULT_SPRING,
        delay: 3,
      },
    }}
    style={{ width: INITIAL_WIDTH }}
    className={styles.fastestLap}
  >
    <motion.div
      className={styles.container}
      initial={{
        backgroundColor: STYLE_VARS.colorPurple,
        color: STYLE_VARS.colorWhite,
      }}
      animate={{
        backgroundColor: STYLE_VARS.colorPrimaryDark,
        color: STYLE_VARS.colorPink,
      }}
      transition={DEFAULT_SPRING}
    >
      FASTEST LAP
    </motion.div>
    <motion.div
      className={styles.details}
      initial={{
        width: 0,
        backgroundColor: STYLE_VARS.colorPurple,
        opacity: 0,
      }}
      animate={{
        x: INITIAL_WIDTH,
        width: 300,
        backgroundColor: STYLE_VARS.colorPrimaryDark,
        opacity: 1,
      }}
      transition={{
        ...DEFAULT_SPRING,
        delay: 3,
        backgroundColor: {
          ...DEFAULT_SPRING,
          delay: 3,
        },
      }}
    >
      <div>
        <p className={styles.firstName}>{firstName}</p>
        <p className={styles.lastName}>{lastName}</p>
      </div>
      <div className={styles.time}>{lapTime}</div>
    </motion.div>
  </motion.div>
);

export default FastestLap;

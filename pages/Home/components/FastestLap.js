import React from "react";
import { motion } from "framer-motion";

import { COLOURS, FONT_SIZE, SPACING, SHADOWS } from "../../../styles";

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

const FastestLap = ({ firstName, lastName, lapTime }) => (
  <>
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
      className="fastest-lap"
    >
      <motion.div
        className="fastest-lap__container"
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
        className="fastest-lap__details"
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
          <p className="fastest-lap__first-name">{firstName}</p>
          <p className="fastest-lap__last-name">{lastName}</p>
        </div>
        <div className="fastest-lap__time">{lapTime}</div>
      </motion.div>
    </motion.div>

    <style>{`
      .fastest-lap {
        color: ${COLOURS.white};
        height: 80px;
        font-size: ${FONT_SIZE.large};
        position: relative;
      }
      
      .fastest-lap__container {
        box-shadow: ${SHADOWS.light};
        position: absolute;
        z-index: 10;
        font-weight: bold;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

      }

      .fastest-lap__details {
        box-shadow: ${SHADOWS.light};
        position: absolute;
        top: 0;
        height: 100%;
        z-index: 0;
        display: flex;
        align-items: center;
      }

      .fastest-lap__first-name {
        margin-bottom: 0;
      }

      .fastest-lap__last-name {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0;
      }

      .fastest-lap__time {
        padding-left: ${SPACING.large};
        font-size: ${FONT_SIZE.larger};
        font-weight: bold;
        flex: 1;
        padding-right: ${SPACING.large};
      }
    `}</style>
  </>
);

export default FastestLap;

import { FaChevronRight } from "react-icons/fa";

import Button from "../../../../components/Button/Button";
import { SPACING, FONT_SIZE } from "../../../../styles";
import styles from "./ProjectKwiz.module.css";

const Project2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img
          src="img/kwiz.png"
          alt="Online quiz app"
          style={{ maxWidth: "160px" }}
        />
      </div>

      <div className={styles.description}>
        <h2 className={styles.title}>Kwizgame.com</h2>
        <p
          style={{
            fontSize: FONT_SIZE.large,
            marginBottom: SPACING.medium,
          }}
        >
          Host and manage a quiz or join and battle your friends with realtime
          leaderboards.
          <br />
          Build interesting and detailed quizzes with text input or multiple
          choice questions.
        </p>
        <Button
          text="Check it out!"
          href="https://kwizgame.com"
          variant="tertiary"
          size="large"
          endSlot={<FaChevronRight size="14px" />}
        />
      </div>
    </div>
  );
};

export default Project2;

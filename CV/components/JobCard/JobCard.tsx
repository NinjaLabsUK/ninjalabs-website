import React from "react";

import Button from "../../../../components/Button/Button";
import styles from "./JobCard.module.css";

interface JobCardProps {
  companyName: string;
  position: string;
  description: string;
  colour: string;
  onMoreClick: () => void;
  popoverTarget: string;
}

const JobCard = ({
  companyName,
  position,
  description,
  colour,
  onMoreClick,
  popoverTarget,
}: JobCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h3>{companyName}</h3>
          <h4>{position}</h4>
          <p className={styles.description}>{description}</p>
        </div>
        <div>
          <Button
            text="Read more"
            onClick={onMoreClick}
            variant="link"
            attributes={{ popoverTarget, popoverTargetAction: "show" }}
          />
        </div>
      </div>
      <div
        className={styles.bar}
        style={{
          background: `linear-gradient(to right, #1e1e1e, ${colour})`,
        }}
      />
    </div>
  );
};

export default JobCard;

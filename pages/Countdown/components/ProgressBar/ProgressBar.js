import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.bar} style={{ width: `${percentage}%` }}>
        <div className={styles.amount}>{percentage}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;

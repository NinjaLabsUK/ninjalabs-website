import styles from "./Badge.module.css";

const Badge = ({ text }) => <span className={styles.badge}>{text}</span>;

export default Badge;

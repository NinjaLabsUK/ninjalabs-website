import styles from "./Button.module.css";

const Button = ({
  text,
  onClick = () => null,
  href,
  variant = "primary",
  size = "medium",
  endSlot,
}) => {
  const handleClick = () => {
    if (href) {
      return window.open(href, "_blank");
    }

    if (onClick) onClick();
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={handleClick}
    >
      {text}
      {endSlot && <div className={styles.endSlot}>{endSlot}</div>}
    </button>
  );
};

export default Button;

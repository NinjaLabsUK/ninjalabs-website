import styles from "./Button.module.css";

type ButtonVariant = "primary" | "link" | "tertiary";
type ButtonSize = "large" | "medium";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  endSlot?: React.ReactNode;
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick = () => null,
  href,
  variant = "primary",
  size = "medium",
  endSlot,
  attributes,
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
      {...attributes}
    >
      {text}
      {endSlot && <div className={styles.endSlot}>{endSlot}</div>}
    </button>
  );
};

export default Button;

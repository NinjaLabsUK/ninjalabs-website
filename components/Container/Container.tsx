import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  fluid = false,
}) => (
  <div className={`${styles.container} ${fluid && styles.fluid} ${className}`}>
    {children}
  </div>
);

export default Container;

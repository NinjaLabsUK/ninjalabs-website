import styles from "./Container.module.css";

const Container = ({ className = "", fluid = false, children }) => (
  <div className={`${styles.container} ${fluid && styles.fluid} ${className}`}>
    {children}
  </div>
);

export default Container;

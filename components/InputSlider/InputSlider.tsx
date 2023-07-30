import styles from "./InputSlider.module.css";

type InputSliderProps = {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

const InputSlider: React.FC<InputSliderProps> = ({
  label,
  value,
  min,
  max,
  onChange,
}) => {
  return (
    <label>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={styles.input}
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
};

export default InputSlider;

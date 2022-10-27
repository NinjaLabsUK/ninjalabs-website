import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";

import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Portal = ({ children }) => {
  const portalRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.getElementById("modal");
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, portalRef.current) : [];
};

const Modal = ({ children, title, onClose }) => {
  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.align}>
            <div className={styles.content}>
              <button className={styles.close} onClick={onClose}>
                <RiCloseLine size={30} />
              </button>
              {title && <header className={styles.title}>{title}</header>}
              <div className={styles.text}>{children}</div>
              <div className={styles.actions}>
                <Button text="Close" onClick={onClose} variant="tertiary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

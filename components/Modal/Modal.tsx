import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import { createFocusTrap } from "focus-trap";

import Button from "../Button/Button";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  title: string;
  onClose: () => null;
};

type PortalProps = {
  children: React.ReactNode;
};

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const modalEl = document.getElementById("modal");
    if (modalEl) portalRef.current = modalEl;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      let trap;
      const modalEl = document.getElementById("modal");
      if (modalEl) {
        trap = createFocusTrap(modalEl);
        trap.activate();
      }

      return () => {
        trap.deactivate();
      };
    }
  }, [mounted]);

  return mounted ? createPortal(children, portalRef.current) : [];
};

const Modal: React.FC<ModalProps> = ({ children, title, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (ev: KeyboardEvent) => {
      if (ev.code === "Escape") onClose();
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

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

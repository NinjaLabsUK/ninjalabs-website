import React, { useRef, PropsWithChildren, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { createFocusTrap, FocusTrap } from "focus-trap";

import Button from "../Button/Button";
import styles from "./Modal.module.css";

interface ModalProps {
  id: string;
  title: React.ReactNode;
}

const Modal = ({ id, title, children }: PropsWithChildren<ModalProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  const focusTrap = useRef<FocusTrap>(null);

  useEffect(() => {
    setupFocusTrap();

    return () => {
      clearFocusTrap();
    };
  }, []);

  const setupFocusTrap = () => {
    if (!ref.current) return;

    ref.current.addEventListener("toggle", (event: ToggleEvent) => {
      if (event.newState === "open" && ref.current) {
        const trap = createFocusTrap(ref.current);
        trap.activate();
        focusTrap.current = trap;
      } else if (event.newState === "closed") {
        clearFocusTrap();
      }
    });
  };

  const clearFocusTrap = () => {
    if (focusTrap.current?.active) {
      focusTrap.current.deactivate();
    }
  };

  return (
    <div popover="auto" id={id} className={styles.modal} ref={ref}>
      <button
        className={styles.close}
        popoverTargetAction="hide"
        popoverTarget={id}
      >
        <RiCloseLine size={30} />
      </button>
      {title && <header className={styles.title}>{title}</header>}
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>
        <Button
          text="Close"
          variant="tertiary"
          attributes={{ popoverTarget: id, popoverTargetAction: "hide" }}
        />
      </div>
    </div>
  );
};

export default Modal;

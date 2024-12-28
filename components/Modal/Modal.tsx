import React, { PropsWithChildren } from "react";
import { RiCloseLine } from "react-icons/ri";

import Button from "../Button/Button";
import styles from "./Modal.module.css";

interface ModalProps {
  id: string;
  title: React.ReactNode;
}

const Modal = ({ id, title, children }: PropsWithChildren<ModalProps>) => {
  return (
    <div popover="auto" id={id} className={styles.modal}>
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

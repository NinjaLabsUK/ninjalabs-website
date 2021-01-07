import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";

import Button from "../components/Button";
import { COLOURS, SPACING, BORDER_RADIUS } from "../styles";

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
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal__align">
            <div className="modal__content">
              <button className="modal__close" onClick={onClose}>
                <RiCloseLine size={30} />
              </button>
              {title && <header className="modal__title">{title}</header>}
              <div className="modal__text">{children}</div>
              <div className="modal__actions">
                <Button text="Back" onClick={onClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .modal {
            position: fixed;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background-color: ${COLOURS.overlay};
            text-align: center;
          }

          .modal__wrapper {
            display: table;
            table-layout: fixed;
            width: 100%;
            height: 100%;
          }

          .modal__align {
            display: table-cell;
            vertical-align: middle;
            width: 100%;
          }

          .modal__content {
            background-color: ${COLOURS.darkerGrey};
            max-width: 500px;
            color: ${COLOURS.white};
            border-radius: ${BORDER_RADIUS};
            display: inline-block;
            text-align: left;
            position: relative;
          }

          .modal__title {
            padding: ${SPACING.larger};
          }

          .modal__close {
            display: inline-block;
            position: absolute;
            top: ${SPACING.large};
            right: ${SPACING.large};
            margin-bottom: 0;
            padding: 0;
            text-decoration: none;
            cursor: pointer;
            background: none;
            border: none;
            color: ${COLOURS.white};
            width: 30px;
            height: 30px;
          }

          .modal__text {
            max-height: 360px;
            overflow-y: auto;
            padding: 0 ${SPACING.larger};
          }

          .modal__actions {
            padding: ${SPACING.larger};
          }
        `}
      </style>
    </Portal>
  );
};

export default Modal;

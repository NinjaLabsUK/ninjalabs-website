import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
              <button className="modal__close">Close</button>
              {title && <div className="modal__title">{title}</div>}
              <div className="modal__text">{children}</div>
              <Button text="Back" onClick={onClose} />
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
            padding: ${SPACING.larger};
            color: ${COLOURS.white};
            border-radius: ${BORDER_RADIUS};
            display: inline-block;
            text-align: left;
            position: relative;
          }

          .modal__close {
            display: inline-block;
            position: absolute;
            top: 10px;
            right: 10px;
            margin-bottom: 0;
            padding: 0;
            text-decoration: none;
            cursor: pointer;
          }

          .modal__text {
            margin-bottom: ${SPACING.medium};
            max-height: 350px;
            overflow-y: auto;
          }
        `}
      </style>
    </Portal>
  );
};

export default Modal;

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

const Modal = ({ children, onClose }) => {
  return (
    <Portal>
      <div className="modal">
        <div className="modal__content">
          {children}

          <Button text="Ok" onClick={onClose} />
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
            animation-name: fade-in;
            animation-duration: 0.3s;
          }

          .modal__content {
            background-color: ${COLOURS.darkerGrey};
            position: absolute;
            max-width: 500px;
            left: 0;
            right: 0;
            margin: 200px auto;
            padding: ${SPACING.larger};
            color: ${COLOURS.white};
            border-radius: ${BORDER_RADIUS};
            animation-name: fade-in;
            animation-duration: 0.8s;
          }
        `}
      </style>
    </Portal>
  );
};

export default Modal;

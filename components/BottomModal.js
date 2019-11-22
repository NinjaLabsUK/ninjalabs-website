import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

import Container from "./Container";
import Button from "./Button";
import { COLOURS } from "../styles";

const Portal = ({ children }) => {
  const portalRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.getElementById("modal");
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, portalRef.current) : [];
};

const BottomModal = ({ title, onClose, children }) => (
  <Portal>
    <div className="bottom-modal">
      <div className="bottom-modal__content">
        <Container>
          <h2 className="bottom-modal__title">{title}</h2>
          {children}
          <Button text="Ok" onClick={onClose} />
        </Container>
      </div>
      <style jsx>{`
        .bottom-modal {
          position: fixed;
          bottom: 0;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: ${COLOURS.overlay};
        }

        .bottom-modal__content {
          background-color: ${COLOURS.darkerGrey};
          bottom: 0;
          position: absolute;
          width: 100%;
        }

        .bottom-modal__title {
          color: ${COLOURS.white};
        }
      `}</style>
    </div>
  </Portal>
);

export default BottomModal;

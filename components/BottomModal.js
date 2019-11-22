import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

import Container from "./Container";
import Button from "./Button";
import { COLOURS, SPACING } from "../styles";

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
          {title && <h2 className="bottom-modal__title">{title}</h2>}
          {children}
          <div className="bottom-modal__actions">
            <Button text="Ok" onClick={onClose} />
          </div>
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
          color: ${COLOURS.white};
        }

        .bottom-modal__title {
          color: ${COLOURS.white};
        }

        .bottom-modal__actions {
          margin-top: ${SPACING.medium};
        }
      `}</style>
    </div>
  </Portal>
);

export default BottomModal;

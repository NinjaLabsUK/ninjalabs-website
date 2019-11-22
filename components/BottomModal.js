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

const BottomModal = ({ title, active = false, onClose, children }) => {
  const contentRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = ({ target }) => {
    if (contentRef.current && !contentRef.current.contains(target)) {
      onClose();
    }
  };

  return (
    <Portal>
      <div className={`bottom-modal ${active ? "bottom-modal--active" : ""}`}>
        <div className="bottom-modal__content" ref={contentRef}>
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
            animation-name: fade-in;
            animation-duration: 0.3s;
          }

          .bottom-modal__content {
            background-color: ${COLOURS.darkerGrey};
            bottom: 0;
            position: absolute;
            width: 100%;
            color: ${COLOURS.white};
            animation-name: fade-in;
            animation-duration: 0.8s;
          }

          .bottom-modal__title {
            color: ${COLOURS.white};
          }

          .bottom-modal__actions {
            margin-top: ${SPACING.medium};
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </Portal>
  );
};

export default BottomModal;

import { RiFullscreenLine } from "react-icons/ri";

import { BORDER_RADIUS, SHADOWS, SPACING } from "../styles";

const ExpandableImage = ({ imgSrc }) => {
  const openImage = () => {
    window.open(imgSrc, "_blank");
  };

  return (
    <div className="expandable-image" onClick={openImage}>
      <img src={imgSrc} className="expandable-image__img" />

      <RiFullscreenLine className="expandable-image__fullscreen" size="24px" />

      <style jsx global>{`
        .expandable-image {
          position: relative;
          cursor: pointer;
        }

        .expandable-image__fullscreen {
          position: absolute;
          opacity: 0;
          bottom: ${SPACING.medium};
          right: ${SPACING.medium};
          color: white;
          transition: opacity 0.5s;
        }

        .expandable-image:hover .expandable-image__fullscreen {
          opacity: 1;
        }

        .expandable-image__img {
          width: 100%;
          border-radius: ${BORDER_RADIUS};
          box-shadow: ${SHADOWS.medium};
        }
      `}</style>
    </div>
  );
};

export default ExpandableImage;

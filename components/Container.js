import { CONTAINER_WIDTH, SPACING, BREAKPOINTS } from "../styles";

const Container = ({
  className = "",
  fluid = false,
  padding = true,
  children
}) => (
  <div className={`container ${className}`}>
    {children}
    <style jsx>{`
      .container {
        width: 100%;
        max-width: ${fluid ? "100%" : CONTAINER_WIDTH};
        margin: 0 auto;
        padding: ${padding ? SPACING.large : "0"};
      }

      @media (max-width: ${BREAKPOINTS.mobile}) {
        .container {
          padding: ${padding ? SPACING.medium : "0"};
        }
      }
    `}</style>
  </div>
);

export default Container;

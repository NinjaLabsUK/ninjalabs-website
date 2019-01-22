export default ({ children }) => (
  <div className="container">
    {children}
    <style jsx>
      {`
        .container {
          display: flex;
          z-index: 1;
        }
      `}
    </style>
  </div>
);

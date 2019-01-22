export default ({ children }) => (
  <div className="container">
    {children}
    <style jsx>
      {`
        .container {
          display: flex;
        }
      `}
    </style>
  </div>
);

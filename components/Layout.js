import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <div id="modal"></div>
  </>
);

export default Layout;

import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MainProps {
  children?: string | JSX.Element;
}

const Main = ({ children }: MainProps) => {
  return (
    <>
      <Header />

      <Outlet />
      {children}

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        draggablePercent={60}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Main;

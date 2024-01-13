import { Outlet } from "react-router-dom";
import Footer from "../Footer/Index";
import Header from "../Header/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main className="px-5">
        <Outlet />
        {children}
      </main>
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
    </div>
  );
};

export default Main;

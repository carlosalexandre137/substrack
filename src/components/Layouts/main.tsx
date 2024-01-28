import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

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
    </>
  );
};

export default Main;

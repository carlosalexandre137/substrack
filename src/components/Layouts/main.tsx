import { Outlet } from "react-router-dom";
import Header from "../Header";

interface MainProps {
  children?: string | JSX.Element;
}

const Main = ({ children }: MainProps) => {
  return (
    <>
      <Header />

      <Outlet />
      {children}
    </>
  );
};

export default Main;

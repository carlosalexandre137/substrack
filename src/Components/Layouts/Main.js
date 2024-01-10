import { Outlet } from "react-router-dom";
import Footer from "../Footer/Index";
import Header from "../Header/Index";

const Main = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main className="px-5">
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Main;

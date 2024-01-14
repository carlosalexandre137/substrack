import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark-purple p-4 shadow-md shadow-light-purple text-center">
      <div className="container flex justify-between items-center mx-auto">
        <Link to="/" className="text-light-white font-bold text-2xl">
          Substrack
        </Link>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/" className={({ isActive }) => `text-light-white font-bold text-md ` + (isActive ? "active" : "")}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/assinaturas/registrar"
              className={({ isActive }) => `text-light-white font-bold text-md uppercase ` + (isActive ? "active" : "")}
            >
              registrar
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

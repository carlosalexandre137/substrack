import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark-purple p-4 shadow-md shadow-light-purple text-center sticky top-0 w-full z-40">
      <div className="container flex justify-between items-center mx-auto">
        <Link to="/" className="text-light-white font-bold text-2xl">
          Substrack
        </Link>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `font-bold text-md uppercase ` + (isActive ? "text-light-green" : "text-light-white")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/assinaturas/registrar"
              className={({ isActive }) => `font-bold text-md uppercase ` + (isActive ? "text-light-green" : "text-light-white")}
            >
              Registrar
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

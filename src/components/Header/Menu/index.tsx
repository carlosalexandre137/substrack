import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface NavLink {
  to: string;
  className?: string;
  children?: string | JSX.Element;
}

const NavLinkElement = ({ to, className, children }: NavLink) => (
  <li>
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  </li>
);

const LinkStyled = styled(NavLinkElement)`
  font-weight: 600;
  font-size: 17px;
  text-transform: uppercase;
  color: var(--color-white-light);
  text-decoration: none;

  &:hover {
    color: #ccc;
    transition: color 0.3s;
  }

  &.active {
    color: var(--color-green-light);
  }
`;

const MenuListStyled = styled.ul`
  display: flex;
  gap: 1.25rem;
`;

const Menu = () => {
  return (
    <MenuListStyled>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/assinaturas/registrar">Registrar</LinkStyled>
    </MenuListStyled>
  );
};
export default Menu;

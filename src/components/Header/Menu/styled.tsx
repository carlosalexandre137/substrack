import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const NavLinkElement = ({ to, className, children }: NavLinkProps) => (
  <li>
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  </li>
);

export const LinkStyled = styled(NavLinkElement)`
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

export const MenuListStyled = styled.ul`
  display: flex;
  gap: 1.25rem;
`;

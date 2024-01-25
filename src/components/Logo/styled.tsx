import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const LinkElement = ({ className, children, to }: LinkProps) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export const LogoStyled = styled(LinkElement)`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  color: var(--color-white-light);
  text-decoration: none;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;

  &:hover {
    color: #ccc;
    transition: color 0.3s;
  }
`;

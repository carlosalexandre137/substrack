import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  className?: string;
  children?: string | JSX.Element;
}

const LinkElement = ({ className, children }: LinkProps) => (
  <Link to="/" className={className}>
    {children}
  </Link>
);

const LogoStyled = styled(LinkElement)`
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

const Logo = () => {
  return <LogoStyled>Substrack</LogoStyled>;
};

export default Logo;

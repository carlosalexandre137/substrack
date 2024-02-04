import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

const LinkStyled = ({ children, className, to }: LinkProps) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export const IconStyled = styled(LinkStyled)`
  color: var(--color-purple-dark);

  &:hover {
    color: var(--color-purple-light);
  }
`;

export const ButtonStyled = styled(LinkStyled)`
  font-family: var(--font-default);
  background-color: var(--color-brown-dark);
  color: var(--color-white-light);
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  width: 100%;
  max-width: 450px;
  border: none;
  margin: 20px auto 10px;
  display: block;
  font-size: 0.9rem;
  line-height: 1.2rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: var(--color-purple-light);
  }
`;

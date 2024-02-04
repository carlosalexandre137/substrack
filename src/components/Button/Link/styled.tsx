import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const LinkElement = ({ children, className, to }: LinkProps) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export const LinkStyled = styled(LinkElement)<{ $theme: string }>`
  border-radius: 8px;
  background-color: var(--theme-background-${(props) => props.$theme});
  color: var(--theme-color-${(props) => props.$theme});
  padding: 10px 20px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  line-height: 1.3rem;
  border: none;
  cursor: pointer;
  font-family: var(--font-default);
  text-decoration: none;
`;

import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const CardStyled = styled.div`
  border-radius: 10px;
  background-color: var(--color-brown-dark);
  display: flex;
  flex-direction: column;

  color: var(--color-white-light);
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;

  h4 {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.1px;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

const IconLinkElement = ({ children, className, to }: LinkProps) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export const IconStyled = styled(IconLinkElement)`
  display: block;
  width: 24px;
  height: 24px;
  color: var(--color-white-light);
  transition: color 0.3s;

  &:hover {
    color: var(--color-purple-light);
  }
`;

export const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 0.4rem 1.1rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.95rem;

    & > span {
      color: var(--color-pink-light);
      font-size: 0.9rem;
    }
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 0.95rem;

  .footer-info {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 20px;
    padding: 0 0.7rem;

    .price {
      color: var(--color-green-light);
      font-weight: 600;
    }
  }
`;

const LinkElement = ({ className, children, to }: LinkProps) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export const LinkStyled = styled(LinkElement)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 15px 0;
  color: var(--color-white-light);
  border-top: 2px solid #decece52;
  transition: color 0.3s;

  &:hover {
    color: var(--color-purple-light);
  }
`;

import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const CardStyled = styled.div<{ $renewal: boolean }>`
  border-radius: 10px;
  background-color: ${(props) =>
    props.$renewal ? "var(--color-brown-medium)" : "var(--color-brown-dark)"};
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
    width: 100%;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 10px;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

const LinkElement = ({ children, className, to, target }: LinkProps) => (
  <Link to={to} className={className} target={target}>
    {children}
  </Link>
);

export const IconStyled = styled(LinkElement)`
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 10px;
    }
  }

  .renewalToday {
    color: #dede27;
    font-weight: 500;
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
    align-items: flex-end;
    margin: 30px 0 20px;
    padding: 0 0.7rem;
    flex-grow: 1;

    .price {
      color: var(--color-green-light);
      font-weight: 600;
    }
  }
`;

export const LinkStyled = styled(LinkElement)`
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

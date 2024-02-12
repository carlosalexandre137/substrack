import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const HeaderTopStyled = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-violet-dark);
`;

export const TitleSubStyled = styled.h1`
  font-size: 29px;
  font-family: var(--font-title);
  font-weight: bold;
  padding-right: 10px;
`;

const LinkItem = ({ to, className, children }: LinkProps) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export const IconLinkSubStyled = styled(LinkItem)`
  color: var(--color-violet-dark);

  &:hover {
    color: var(--color-purple-light);
  }
`;

export const ListInfoSubStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 10px;
  row-gap: 20px;
  margin-top: 10px;

  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.75);

    &:first-child::before {
      content: "";
      display: none;
    }

    &::before {
      content: "|";
      margin-right: 10px;
    }
  }

  h2 {
    text-align: center;
    grid-column: span 2;
  }

  @media (min-width: 490px) {
    grid-template-columns: auto auto 1fr;

    h2 {
      text-align: right;
      grid-column: auto;
    }
  }
`;

import Container from "@/components/Containers";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const ContainerNotFoundStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  margin: 30px auto;

  .container-image {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    .container-image {
      display: block;
    }

    img {
      width: 100%;
      max-width: 350px;
      margin-left: auto;
      display: block;
    }
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    font-weight: 800;
    margin-bottom: 5px;
    line-height: 8.1rem;
    font-size: 8rem;
    color: #263d4c;
    letter-spacing: 3px;
  }

  h4 {
    color: #263d4c;
    font-weight: 700;
    font-size: 1.05rem;
    line-height: 1.75rem;
    max-width: 340px;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    h4 {
      text-align: left;
    }
  }
`;

const LinkElement = ({ to, children, className }: LinkProps) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export const LinkStyled = styled(LinkElement)`
  background-color: #263d4c;
  color: white;
  padding: 0.9rem 3.5rem;
  border-radius: 20px;
  text-decoration: none;
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
`;

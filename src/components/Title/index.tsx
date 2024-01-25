import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  justifyContent?: string;
  children: ReactNode;
}

const TitleStyled = styled.h1<{ $justifyContent: string }>`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-black-dark);
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items: center;

  @media (min-width: 640px) {
    & {
      font-size: 1.5rem;
    }
  }
`;

const Title = ({ justifyContent = "space-between", children }: TitleProps) => {
  return <TitleStyled $justifyContent={justifyContent}>{children}</TitleStyled>;
};

export default Title;

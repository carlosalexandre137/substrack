import styled from "styled-components";

export const TitleStyled = styled.h1<{ $justifyContent: string }>`
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

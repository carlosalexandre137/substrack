import styled from "styled-components";

export const ContainerCardsStyled = styled.div<{ $count: number }>`
  display: grid;
  gap: 20px;
  margin: 20px auto 10px;
  grid-template-columns: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, ${(props) => (props.$count <= 2 ? "30%" : "1fr")})
    );
  }
`;

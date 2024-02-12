import styled from "styled-components";
import Container from "../Containers";

export const HeaderStyled = styled.header`
  background: var(--color-purple-dark);
  padding: 2px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 3px 8px #3c363f;

  h1 {
    font-family: var(--font-title);
  }
`;

export const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

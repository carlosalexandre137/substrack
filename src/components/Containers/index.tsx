import styled from "styled-components";

const ContainerBase = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 20px 10px;

  @media (min-width: 768px) {
    padding: 20px 50px;
  }
`;

const Container = styled(ContainerBase)``;

export const ContainerAside = styled(ContainerBase).attrs({ as: "aside" })``;

export default Container;

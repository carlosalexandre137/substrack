import styled from "styled-components";
import Container from "../Container";
import Logo from "../Logo";
import Menu from "./Menu";

const HeaderStyled = styled.header`
  background: var(--color-purple-dark);
  padding: 2px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 3px 8px #74647c;

  h1 {
    font-family: var(--font-title);
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Logo />

        <Menu />
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;

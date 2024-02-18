import Logo from "@components/Logo";
import Menu from "@components/Header/Menu";
import { ContainerStyled, HeaderStyled } from "./styled";

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

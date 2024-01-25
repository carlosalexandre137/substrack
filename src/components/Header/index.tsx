import Logo from "../Logo";
import Menu from "./Menu";
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

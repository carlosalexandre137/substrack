import { LinkStyled, MenuListStyled } from "./styled";

const Menu = () => {
  return (
    <MenuListStyled>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/assinaturas/registrar">Registrar</LinkStyled>
    </MenuListStyled>
  );
};
export default Menu;

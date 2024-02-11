import { GlobeAltIcon } from "@heroicons/react/24/solid";
import Container from "../Container";
import {
  HeaderTopStyled,
  IconLinkSubStyled,
  ListInfoSubStyled,
  TitleSubStyled,
} from "./styled";

const HeaderSub = () => {
  return (
    <Container>
      <HeaderTopStyled>
        <TitleSubStyled>Netflix</TitleSubStyled>
        <IconLinkSubStyled to="/">
          <GlobeAltIcon width={29} />
        </IconLinkSubStyled>
      </HeaderTopStyled>
      <ListInfoSubStyled>
        <p>Desde 12 de outubro de 2023</p>
        <p>Mensalmente</p>
        <h2>Renovando hoje</h2>
      </ListInfoSubStyled>
    </Container>
  );
};

export default HeaderSub;

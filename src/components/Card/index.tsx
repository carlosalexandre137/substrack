import { GlobeAltIcon } from "@heroicons/react/24/solid";

import { BodyStyled, CardStyled, FooterStyled, HeaderStyled, IconStyled, LinkStyled } from "./styled";

const Card = () => {
  return (
    <CardStyled>
      <HeaderStyled>
        <h4>Netflix teste</h4>
        <div>
          <IconStyled to="/">
            <GlobeAltIcon />
          </IconStyled>
        </div>
      </HeaderStyled>
      <BodyStyled>
        <div>
          <p>Próxima renovação:</p>
          <span>12 de dezembro 2023</span>
        </div>
        <div>
          <p>Plano:</p>
          <span>Plano Premium</span>
        </div>
      </BodyStyled>
      <FooterStyled>
        <div className="footer-info">
          <p className="price">R$ 20,00</p>
          <p className="modality">Anualmente</p>
        </div>
        <LinkStyled to="visualizar">Ver detalhes</LinkStyled>
      </FooterStyled>
    </CardStyled>
  );
};

export default Card;

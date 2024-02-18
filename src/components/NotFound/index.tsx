import Image from "@images/not_found_404.png";
import { ContainerNotFoundStyled, InfoStyled, LinkStyled } from "./styled";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({
  message = "Não foi possível encontrar o que você procura",
}: NotFoundProps) => {
  return (
    <ContainerNotFoundStyled>
      <div className="container-image">
        <img src={Image} />
      </div>
      <InfoStyled>
        <h1>404</h1>
        <h4>{message}</h4>
        <LinkStyled to="/">Voltar para home</LinkStyled>
      </InfoStyled>
    </ContainerNotFoundStyled>
  );
};

export default NotFound;

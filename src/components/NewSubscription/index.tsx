import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Container from "@components/Containers";
import Title from "@components/Title";
import { ButtonStyled, IconStyled } from "./styled";

const NewSubscription = () => {
  const routeRegister = "/assinaturas/registrar";

  return (
    <Container>
      <Title>
        Nova assinatura
        <IconStyled to={routeRegister}>
          <PlusCircleIcon className="icon-md" />
        </IconStyled>
      </Title>
      <ButtonStyled to={routeRegister}>Registrar nova assinatura</ButtonStyled>
    </Container>
  );
};

export default NewSubscription;

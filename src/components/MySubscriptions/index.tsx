import { useState } from "react";
import Card from "../Card";
import Container from "../Container";
import Title from "../Title";
import { ContainerCardsStyled } from "./styled";

const MySubscription = () => {
  const [subscriptions] = useState<number[]>([1, 2, 3]);

  return (
    <Container>
      <Title>Minhas assinaturas</Title>
      <ContainerCardsStyled $count={subscriptions.length}>
        {subscriptions.map((item) => (
          <Card key={item} />
        ))}
      </ContainerCardsStyled>
    </Container>
  );
};

export default MySubscription;

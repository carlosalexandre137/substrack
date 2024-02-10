import Card from "../Card";
import Container from "../Container";
import Title from "../Title";
import { ContainerCardsStyled } from "./styled";
import { useSubscriptionContext } from "../../hooks/useSubscriptionContext";

const MySubscription = () => {
  const { getSubscriptions } = useSubscriptionContext();
  const subscriptions = getSubscriptions();

  return (
    <Container>
      <Title>Minhas assinaturas</Title>
      <ContainerCardsStyled $count={subscriptions.length}>
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} subscription={subscription} />
        ))}
      </ContainerCardsStyled>
    </Container>
  );
};

export default MySubscription;

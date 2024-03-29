import Card from "@components/Card";
import Container from "@components/Containers";
import Title from "@components/Title";
import { ContainerCardsStyled } from "./styled";
import { useSubscriptionContext } from "@/hooks/useSubscriptionContext";

const MySubscription = () => {
  const { subscriptions } = useSubscriptionContext();

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

import BasePage from "@/components/BasePage";
import MySubscription from "@/components/MySubscriptions";
import NewSubscription from "@/components/NewSubscription";

const Home = () => {
  return (
    <>
      <BasePage
        title="Suas assinaturas"
        description="Explore um resumo simplificado de todas as suas assinaturas em um único lugar. Gerencie facilmente suas informações de assinatura."
      />
      <NewSubscription />
      <MySubscription />
    </>
  );
};

export default Home;

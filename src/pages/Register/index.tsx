import Form from "@components/Form";
import { useSubscriptionContext } from "@/hooks/useSubscriptionContext";
import { ISubscription } from "@/shared/interfaces/ISubscription";
import { formatValuesSubscription } from "@/utils/Subscription";
import BasePage from "@/components/BasePage";

const Register = () => {
  const { addSubscription } = useSubscriptionContext();

  function saveRegisterSubscription(subscription: ISubscription) {
    addSubscription(formatValuesSubscription(subscription));
  }

  return (
    <>
      <BasePage
        title="Registrar nova assinatura"
        description="Preencha o formulário abaixo para adicionar uma nova assinatura ao seu perfil. Mantenha seus registros atualizados e organizados."
      />
      <Form
        button="Registrar"
        save={saveRegisterSubscription}
        title="Registrar nova assinatura"
        clear={true}
        message="Nova assinatura registrada com sucesso"
      />
    </>
  );
};

export default Register;

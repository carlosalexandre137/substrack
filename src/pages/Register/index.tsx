import Form from "../../components/Form";
import { useSubscriptionContext } from "../../hooks/useSubscriptionContext";
import { ISubscription } from "../../shared/interfaces/ISubscription";
import { formatValuesSubscription } from "../../utils/Subscription";

const Register = () => {
  const { addSubscription } = useSubscriptionContext();

  function saveRegisterSubscription(subscription: ISubscription) {
    addSubscription(formatValuesSubscription(subscription));
  }

  return (
    <Form
      button="Registrar"
      save={saveRegisterSubscription}
      title="Registrar nova assinatura"
      clear={true}
      message="Nova assinatura registrada com sucesso"
    />
  );
};

export default Register;

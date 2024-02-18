import { useParams } from "react-router-dom";
import Form from "@components/Form";
import { ISubscription } from "@/shared/interfaces/ISubscription";
import { useSubscriptionContext } from "@/hooks/useSubscriptionContext";
import SubscriptionHelper from "@/helpers/SubscriptionHelper";
import { getShortDateStringEnglish } from "@/utils/Date";
import { formatValuesSubscription } from "@/utils/Subscription";
import NotFound from "@/components/NotFound";
import BasePage from "@/components/BasePage";

const EditSubscription = () => {
  const params = useParams();
  const { getSubscriptionWithId } = useSubscriptionContext();
  const id = Number(params.id) ?? 0;
  const subscription = getSubscriptionWithId(id);

  if (subscription === false) {
    return (
      <NotFound message="Não foi possível encontrar a assinatura que você procura" />
    );
  }

  const sub = new SubscriptionHelper(subscription);
  const { updateSubscriptionWithId } = useSubscriptionContext();

  function saveEditedSubscription(subscription: ISubscription) {
    updateSubscriptionWithId(id, formatValuesSubscription(subscription));
  }

  return (
    <>
      <BasePage
        title="Editar assinatura"
        description="Faça alterações e atualizações nos detalhes da sua assinatura aqui. Mantenha seus registros precisos e atualizados conforme necessário."
      />
      <Form
        title={`Editar assinatura ${sub.name}`}
        button="Editar"
        save={saveEditedSubscription}
        valueName={sub.name}
        valueLink={sub.link}
        valuePlan={sub.plan}
        valuePrice={subscription.price}
        valueDate={getShortDateStringEnglish(new Date(subscription.date))}
        valueModality={subscription.modality}
        message="Assinatura editada com sucesso"
      />
    </>
  );
};

export default EditSubscription;

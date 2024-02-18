import { useParams } from "react-router-dom";
import Form from "@components/Form";
import { ISubscription } from "@/shared/interfaces/ISubscription";
import { useSubscriptionContext } from "@/hooks/useSubscriptionContext";
import SubscriptionHelper from "@/helpers/SubscriptionHelper";
import { getShortDateStringEnglish } from "@/utils/Date";
import { formatValuesSubscription } from "@/utils/Subscription";

const EditSubscription = () => {
  const params = useParams();
  const { getSubscriptionWithId } = useSubscriptionContext();
  const id = Number(params.id) ?? 0;
  const subscription = getSubscriptionWithId(id);

  if (subscription === false) {
    return "Subscription Failed";
  }

  const sub = new SubscriptionHelper(subscription);
  const { updateSubscriptionWithId } = useSubscriptionContext();

  function saveEditedSubscription(subscription: ISubscription) {
    updateSubscriptionWithId(id, formatValuesSubscription(subscription));
  }

  return (
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
  );
};

export default EditSubscription;

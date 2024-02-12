import { useParams } from "react-router-dom";
import HeaderSub from "../../components/HeaderSub";
import { useSubscriptionContext } from "../../hooks/useSubscriptionContext";
import SubscriptionHelper from "../../helpers/SubscriptionHelper";
import DetailsSub from "../../components/DetailsSub";

const Subscription = () => {
  const params = useParams();
  const id = params.id ?? 0;
  const { getSubscriptionWithId } = useSubscriptionContext();

  const subscription = getSubscriptionWithId(Number(id));

  if (subscription === false) {
    return "Subscription failed!";
  }

  const sub = new SubscriptionHelper(subscription);

  return (
    <>
      <HeaderSub
        title={sub.name}
        date={sub.dateInit}
        modality={sub.modality}
        ifRenewalToday={sub.renewal}
      />
      <DetailsSub date={sub.date} price={sub.price} />
      {/* Conteúdo */}
      {/* Sidebar */}
      {/* Tabela */}
    </>
  );
};

export default Subscription;

import { useParams } from "react-router-dom";
import { useState } from "react";
import Form from "../../components/Form/Index";
import { subscriptionFind } from "../../model/subscription/Index";
import { useSubscriptionContext } from "../../hooks/useSubscriptionContext";
import Subscription from "../../controller/subscription/Index";

const Edit = () => {
  const id = useParams().id;
  const subscription = subscriptionFind(id);
  const sub = new Subscription(subscription);

  const [name, setName] = useState(sub.name());
  const [website, setWebsite] = useState(sub.website());
  const [plan, setPlan] = useState(sub.plan());
  const [price, setPrice] = useState(sub.price());
  const [date, setDate] = useState(sub.initDate());
  const [modelSubscription, setModelSubscription] = useState(subscription.modelSubscription);
  const { editSubscription } = useSubscriptionContext();

  if (!subscription) {
    return "NOT FOUND...";
  }

  const sendSubscription = () => {
    editSubscription(id, { name, website, plan, price, date, modelSubscription });
  };

  const nameSubscription = subscription.name;

  return (
    <section className="my-5">
      <h1 className="text-2xl font-bold">
        Editar assinatura <span className="text-light-green">{nameSubscription}</span>
      </h1>

      <Form
        submitForm={sendSubscription}
        listSet={{ setName, setWebsite, setPlan, setPrice, setDate, setModelSubscription }}
        listValues={{
          name,
          website,
          plan,
          price,
          date,
          modelSubscription,
        }}
        button="Editar"
        message="Assinatura alterada com sucesso!"
      />
    </section>
  );
};

export default Edit;

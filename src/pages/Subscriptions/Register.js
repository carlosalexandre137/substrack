import { useState } from "react";
import { useSubscriptionContext } from "./../../hooks/useSubscriptionContext";
import { formatItemsSubscription } from "./../../utils/subscription";

import Form from "../../components/Form/Index";

const Register = () => {
  const [nameSubscription, setNameSubscription] = useState();
  const [website, setWebsite] = useState();
  const [plan, setPlan] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [modelSubscription, setModelSubscription] = useState("quarterly");
  const { addSubscription } = useSubscriptionContext();

  const sendSubscription = () => {
    addSubscription(formatItemsSubscription({ nameSubscription, website, plan, price, date, modelSubscription }));
    setNameSubscription("");
    setWebsite("");
    setPlan("");
    setPrice("");
    setDate("");
    setModelSubscription("quarterly");
  };

  return (
    <section className="my-5">
      <h1 className="text-2xl font-bold">Registrar nova assinatura</h1>

      <Form
        submitForm={sendSubscription}
        listSet={{ setNameSubscription, setWebsite, setPlan, setPrice, setDate, setModelSubscription }}
        listValues={{
          nameSubscription,
          website,
          plan,
          price,
          date,
          modelSubscription,
        }}
        button="Registrar"
      />
    </section>
  );
};

export default Register;

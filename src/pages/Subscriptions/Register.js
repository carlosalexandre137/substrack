import { useState } from "react";
import { useSubscriptionContext } from "./../../hooks/useSubscriptionContext";

import Form from "../../components/Form/Index";
import Title from "components/Title/Index";

const Register = () => {
  const [name, setName] = useState();
  const [website, setWebsite] = useState();
  const [plan, setPlan] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [modelSubscription, setModelSubscription] = useState("quarterly");
  const { addSubscription } = useSubscriptionContext();

  const sendSubscription = () => {
    addSubscription({ name, website, plan, price, date, modelSubscription });
    setName("");
    setWebsite("");
    setPlan("");
    setPrice("");
    setDate("");
    setModelSubscription("quarterly");
  };

  return (
    <section className="container mx-auto my-5">
      <Title>Registrar nova assinatura</Title>

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
        button="Registrar"
        message="Assinatura registrada com sucesso!"
      />
    </section>
  );
};

export default Register;

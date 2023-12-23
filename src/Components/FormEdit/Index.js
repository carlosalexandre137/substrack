import { useState } from "react";
import Form from "../Form/Index";

const FormEdit = ({ updateModal, editSubscription, subscription }) => {
  const [nameSubscription, setNameSubscription] = useState(subscription.nameSubscription);
  const [website, setWebsite] = useState(subscription.website);
  const [plan, setPlan] = useState(subscription.plan);
  const [price, setPrice] = useState(subscription.price);
  const [date, setDate] = useState(subscription.date);
  const [modelSubscription, setModelSubscription] = useState(subscription.modelSubscription);

  const sendSubscription = () => {
    editSubscription(subscription, {
      nameSubscription,
      website,
      plan,
      price,
      date,
      modelSubscription,
    });
    updateModal(false);
  };

  return (
    <Form
      updateModal={updateModal}
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
      button="Editar"
    />
  );
};

export default FormEdit;

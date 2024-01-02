import { useState } from "react";
import Form from "../Form/Index";

const FormCreate = ({ updateModal, saveSubscription }) => {
  const [nameSubscription, setNameSubscription] = useState();
  const [website, setWebsite] = useState();
  const [plan, setPlan] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [modelSubscription, setModelSubscription] = useState("quarterly");

  const sendSubscription = () => {
    let subDate = date + " ";
    saveSubscription({
      nameSubscription,
      website,
      plan,
      price,
      subDate,
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
      button="Registrar"
    />
  );
};

export default FormCreate;

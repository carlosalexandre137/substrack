import { useState } from "react";
import Input from "../Input/Index";
import Select from "../Select/Index";
import { modelSubscriptionList } from "../../Config/Subscription";

const Form = ({ updateModal, saveSubscription }) => {
  const [nameSubscription, setNameSubscription] = useState();
  const [website, setWebsite] = useState();
  const [plan, setPlan] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [modelSubscription, setModelSubscription] = useState("quarterly");

  const sendSubscription = (e) => {
    e.preventDefault();
    saveSubscription({
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
    <form onSubmit={sendSubscription}>
      <div className="px-4 py-3">
        <div className="grid grid-cols-4 gap-4">
          <Input
            className="col-span-4 sm:col-span-2"
            id="nameSubscription"
            label="Nome da assinatura"
            change={(valor) => setNameSubscription(valor)}
            required={true}
            min="5"
            max="255"
          />
          <Input
            className="col-span-4 sm:col-span-2"
            id="website"
            label="Link do site"
            placeholder="https://"
            change={(valor) => setWebsite(valor)}
            min="10"
            max="255"
          />
          <Input
            className="col-span-3"
            id="plan"
            label="Nome do plano"
            change={(valor) => setPlan(valor)}
            required={true}
            min="2"
            max="255"
          />
          <Input
            type="number"
            className="col-span-1"
            id="price"
            label="Valor do plano"
            placeholder="R$ 20,00"
            change={(valor) => setPrice(valor)}
            required={true}
            min="10"
          />
          <Input
            type="date"
            className="col-span-2"
            id="date"
            label="Inicio da assinatura"
            change={(valor) => setDate(valor)}
            required={true}
          />
          <Select
            className="col-span-2"
            id="modelSubscription"
            label="Modelo de assinatura"
            change={(valor) => setModelSubscription(valor)}
            required={true}
          >
            {Object.keys(modelSubscriptionList).map((key) => {
              const modelSub = modelSubscriptionList[key];
              return (
                <option value={key} key={key}>
                  {modelSub.text + " - " + modelSub.prefix}
                </option>
              );
            })}
          </Select>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:justify-between sm:px-6">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => updateModal(false)}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 mt-3 sm:mt-0 sm:w-auto"
        >
          Registrar
        </button>
      </div>
    </form>
  );
};

export default Form;

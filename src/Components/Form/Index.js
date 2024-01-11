import Input from "../Input/Index";
import Select from "../Select/Index";
import { modelSubscriptionList } from "../../config/Subscription";
import InputMask from "../InputMask/Index";

const addZeroBeforeNum = (num) => {
  return num < 10 ? "0" + num : num;
};

const getDateToday = () => {
  let month = addZeroBeforeNum(new Date().getMonth() + 1);
  let day = addZeroBeforeNum(new Date().getDate());
  return new Date().getFullYear() + "-" + month + "-" + day;
};

const Form = ({ submitForm, listSet, listValues = {}, button }) => {
  const dateToday = getDateToday();

  const sendSubmitForm = (e) => {
    e.preventDefault();
    submitForm();
  };

  const value = (item) => {
    return listValues[item] ?? "";
  };

  return (
    <form onSubmit={sendSubmitForm} className="max-w-6xl mx-auto">
      <div className="px-2 sm:px-4 py-3 mt-2">
        <div className="grid grid-cols-4 gap-4">
          <Input
            className="col-span-4 sm:col-span-2"
            id="nameSubscription"
            label="Nome da assinatura"
            change={(value) => listSet.setNameSubscription(value)}
            required={true}
            min="5"
            max="255"
            value={value("nameSubscription")}
          />
          <Input
            className="col-span-4 sm:col-span-2"
            id="website"
            label="Link do site"
            placeholder="https://"
            change={(value) => listSet.setWebsite(value)}
            min="10"
            max="255"
            value={value("website")}
          />
          <Input
            className="col-span-4 sm sm:col-span-3"
            id="plan"
            label="Nome do plano"
            change={(value) => listSet.setPlan(value)}
            required={true}
            min="2"
            max="255"
            value={value("plan")}
          />
          <InputMask
            className="col-span-4 sm:col-span-1"
            id="price"
            label="Valor do plano"
            placeholder="R$ 20,00"
            required={true}
            min="1"
            mask="0.000.000,00"
            maskConfig={{
              reverse: true,
              onChange: (value) => {
                listSet.setPrice(value);
              },
            }}
            value={value("price")}
          />
          <Input
            type="date"
            className="col-span-4 sm:col-span-2"
            id="date"
            label="Inicio da assinatura"
            change={(value) => listSet.setDate(value)}
            required={true}
            value={value("date")}
            max={dateToday}
            min="1991-08-06"
          />
          <Select
            className="col-span-4 sm:col-span-2"
            id="modelSubscription"
            label="Modelo de assinatura"
            change={(value) => listSet.setModelSubscription(value)}
            required={true}
            value={value("modelSubscription")}
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
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-8 py-2 text-sm ml-auto block font-semibold text-white shadow-sm hover:bg-blue-700 mt-5"
        >
          {button}
        </button>
      </div>
    </form>
  );
};

export default Form;

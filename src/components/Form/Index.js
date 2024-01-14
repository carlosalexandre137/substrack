import Input from "../Input/Index";
import Select from "../Select/Index";
import { modelSubscriptionList } from "../../config/Subscription";
import InputMask from "../InputMask/Index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const addZeroBeforeNum = (num) => {
  return num < 10 ? "0" + num : num;
};

const getDateToday = () => {
  let month = addZeroBeforeNum(new Date().getMonth() + 1);
  let day = addZeroBeforeNum(new Date().getDate());
  return new Date().getFullYear() + "-" + month + "-" + day;
};

const Form = ({ submitForm, listSet, listValues = {}, button, message }) => {
  const dateToday = getDateToday();
  const navigate = useNavigate();

  const sendSubmitForm = (e) => {
    toast.success(message, { toastId: 1, autoClose: 3000 });
    e.preventDefault();
    submitForm();
  };

  const value = (item) => {
    return listValues[item] ?? "";
  };

  return (
    <form onSubmit={sendSubmitForm} className="sm:w-5/6 mx-auto">
      <div className="px-2 sm:px-4 py-3 mt-2">
        <div className="grid grid-cols-4 gap-4">
          <Input
            className="col-span-4 sm:col-span-2"
            id="name"
            label="Nome da assinatura"
            change={(value) => listSet.setName(value)}
            required={true}
            min="5"
            max="110"
            value={value("name")}
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
            max="80"
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
        <div className="flex justify-between mt-5">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-md bg-cyan-600 px-5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-cyan-700"
          >
            Voltar
          </button>
          <button type="submit" className="rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
            {button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

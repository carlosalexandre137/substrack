import Input from "../Input/Index";
import Select from "../Select/Index";

const Form = ({ updateModal }) => {
  return (
    <form>
      <div className="px-4 py-3">
        <div className="grid grid-cols-4 gap-4">
          <Input className="col-span-4 sm:col-span-2" id="nameSubscription" label="Nome da assinatura" />
          <Input className="col-span-4 sm:col-span-2" id="website" label="Link do site" placeholder="https://" />
          <Input className="col-span-3" id="plan" label="Nome do plano" />
          <Input className="col-span-1" id="price" label="Valor do plano" placeholder="R$ 20,00" />
          <Input type="date" className="col-span-2" id="date" label="Inicio da assinatura" />
          <Select className="col-span-2" id="modelSubscription" label="Modelo de assinatura">
            <option defaultValue="quarterly">Trimestralmente - 3 anos</option>
            <option defaultValue="annually">Anualmente - 1 ano</option>
            <option defaultValue="monthly">Mensalmente - 1 mês</option>
            <option defaultValue="weekly">Semanalmente - 1 semana</option>
            <option defaultValue="daily">Diariamente - 1 dia</option>
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
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 mt-3 sm:mt-0 sm:w-auto"
          onClick={() => updateModal(false)}
        >
          Registrar
        </button>
      </div>
    </form>
  );
};

export default Form;

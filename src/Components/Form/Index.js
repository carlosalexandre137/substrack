const Form = ({ updateModal }) => {
  return (
    <form>
      <div className="px-4 py-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 sm:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameSubscription">
              Nome da assinatura
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nameSubscription"
              type="text"
              placeholder="Nome da assinatura"
            />
          </div>
          <div className="col-span-4 sm:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
              Link do site
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="website"
              type="text"
              placeholder="https://"
            />
          </div>
          <div className="col-span-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan">
              Nome do plano
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="plan"
              type="text"
              placeholder="Nome do plano"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Valor do plano
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="R$ 20,00"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Inicio da assinatura
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="R$ 20,00"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="modelSubscription" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
              Modelo de assinatura
            </label>
            <select
              id="modelSubscription"
              className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue="quarterly">Trimestralmente - 3 anos</option>
              <option defaultValue="annually">Anualmente - 1 ano</option>
              <option defaultValue="monthly">Mensalmente - 1 mês</option>
              <option defaultValue="weekly">Semanalmente - 1 semana</option>
              <option defaultValue="daily">Diariamente - 1 dia</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
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

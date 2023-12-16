import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faGlobe, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ nameSubscription, website, plan, price, date, modelSubscription }) => {
  return (
    <div className="flex flex-col bg-dark-brown rounded-lg p-3 drop-shadow shadow-sm shadow-red-500/60 min-w-[200px]">
      <div className="header flex justify-between">
        <h3 className="font-medium text-light-white text-xl">{nameSubscription}</h3>
        <div className="actions text-light-purple flex gap-4 items-center">
          <a href={website} target="_blank" rel="noreferrer" className="hover:text-light-pink">
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </a>
          <button type="button" className="hover:text-light-pink">
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </button>
          <button type="button" className="hover:text-light-pink">
            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          </button>
        </div>
      </div>
      <div className="body px-1 py-3 flex flex-col gap-3 mb-10">
        <div className="item">
          <p className="text-light-white">Próxima renovação</p>
          <p className="text-light-pink">12 dezembro de 2023</p>
        </div>
        <div className="item">
          <p className="text-light-white">Plano</p>
          <p className="text-light-pink">Plano {plan}</p>
        </div>
      </div>
      <div className="footer flex justify-between">
        <span className="text-light-green font-medium">R$ {price}</span>
        <span className="text-light-white">{modelSubscription}</span>
      </div>
    </div>
  );
};

export default Card;

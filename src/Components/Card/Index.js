import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faGlobe, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="flex flex-col bg-dark-brown rounded-lg p-3">
      <div className="header flex justify-between">
        <h3 className="font-medium text-light-white text-xl">Netflix</h3>
        <div className="actions text-light-purple flex gap-4 items-center">
          <a href="https://netflix.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </a>
          <button type="button">
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </button>
          <button type="button">
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
          <p className="text-light-pink">Plano Premium</p>
        </div>
      </div>
      <div className="footer flex justify-between">
        <span className="text-light-green font-medium">R$ 20,00</span>
        <span className="text-light-white ">Anualmente</span>
      </div>
    </div>
  );
};

export default Card;

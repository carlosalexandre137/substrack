import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="p-4 mt-16 border-t-4">
      <p className="w-full block text-center font-semibold text-md">
        <FontAwesomeIcon icon={faCopyright} /> Copyright - Todos os direitos reservados - Carlos Alexandre
      </p>
    </div>
  );
};

export default Footer;

import Title from "../Title/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NewSubscription = () => {
  const to = "/assinaturas/registrar";

  return (
    <section className="container mx-auto">
      <Title text="Nova assinatura">
        <Link to={to} title="Registrar nova assinatura">
          <FontAwesomeIcon icon={faCirclePlus} size="xl" />
        </Link>
      </Title>
      <Link to={to} className="text-center bg-dark-brown text-light-white rounded-lg py-3 px-6 mt-5 mx-auto block max-w-md">
        Registrar nova assinatura
      </Link>
    </section>
  );
};

export default NewSubscription;

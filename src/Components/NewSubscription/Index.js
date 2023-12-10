import Title from "../Title/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const NewSubscription = () => {
  return (
    <section>
      <Title text="Nova assinatura">
        <button type="button">
          <FontAwesomeIcon icon={faCirclePlus} size="xl" />
        </button>
      </Title>
      <button type="button" className="text-center bg-dark-brown py-3 px-6 text-light-white mx-auto block mt-5 rounded-lg">
        Criar nova assinatura
      </button>
    </section>
  );
};

export default NewSubscription;

import Title from "../Title/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const NewSubscription = ({ updateModal }) => {
  const addSubscription = () => updateModal(true);

  return (
    <section>
      <Title text="Nova assinatura">
        <button type="button" title="Registrar nova assinatura" onClick={addSubscription}>
          <FontAwesomeIcon icon={faCirclePlus} size="xl" />
        </button>
      </Title>
      <button
        type="button"
        className="text-center bg-dark-brown py-3 px-6 text-light-white mx-auto block mt-5 rounded-lg"
        onClick={addSubscription}
      >
        Registrar nova assinatura
      </button>
    </section>
  );
};

export default NewSubscription;

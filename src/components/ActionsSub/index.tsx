import { useNavigate } from "react-router-dom";
import { useSubscriptionContext } from "../../hooks/useSubscriptionContext";
import Button from "../Button";
import Link from "../Button/Link";
import { ContainerAside } from "../Containers";
import { ContainerButtonsActions } from "./styled";

interface ActionSubProps {
  id: string;
}

export const ActionSub = ({ id }: ActionSubProps) => {
  const { deleteSubscriptionWithId } = useSubscriptionContext();
  const navigate = useNavigate();

  function deleteSubscription() {
    deleteSubscriptionWithId(id);
    navigate("/");
  }

  return (
    <ContainerAside>
      <ContainerButtonsActions>
        <Link to={`/assinaturas/${id}/editar`}>Editar assinatura</Link>
        <Button theme="danger" click={deleteSubscription}>
          Remover assinatura
        </Button>
      </ContainerButtonsActions>
    </ContainerAside>
  );
};

export default ActionSub;

import { useNavigate } from "react-router-dom";
import { useSubscriptionContext } from "@/hooks/useSubscriptionContext";
import Button from "@/components/Button";
import Link from "@/components/Button/Link";
import { ContainerButtonsActions } from "./styled";
import { toast } from "react-toastify";

interface ActionSubProps {
  id: string;
}

export const ActionSub = ({ id }: ActionSubProps) => {
  const { deleteSubscriptionWithId } = useSubscriptionContext();
  const navigate = useNavigate();

  function deleteSubscription() {
    deleteSubscriptionWithId(id);
    navigate("/");
    toast.success("Assinatura removida com sucesso", {
      toastId: 1,
      autoClose: 3000,
    });
  }

  return (
    <aside className="actions-subscription">
      <ContainerButtonsActions>
        <Link to={`/assinaturas/${id}/editar`}>Editar assinatura</Link>
        <Button theme="danger" click={deleteSubscription}>
          Remover assinatura
        </Button>
      </ContainerButtonsActions>
    </aside>
  );
};

export default ActionSub;

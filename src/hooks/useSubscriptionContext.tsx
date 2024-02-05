import { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import { ISubscription } from "../shared/interfaces/ISubscription";
import { SubscriptionActionType } from "../enum/Subscription";

export const useSubscriptionContext = () => {
  const { dispatch } = useValidationContext();

  function addSubscription(subscription: ISubscription) {
    dispatch({
      type: SubscriptionActionType.ADD_SUBSCRIPTION,
      payload: subscription,
    });
  }

  return { addSubscription };
};

const useValidationContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("SubscriptionContext must be used within a SubscriptionProvider");
  }
  return context;
};

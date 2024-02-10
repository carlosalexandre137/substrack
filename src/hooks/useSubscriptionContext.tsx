import { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import { ISubscription } from "../shared/interfaces/ISubscription";
import { SubscriptionActionType } from "../enum/Subscription";
import { SubscriptionCreate, SubscriptionGetAll } from "../services/SubscriptionService";

export const useSubscriptionContext = () => {
  const { dispatch } = useValidationContext();

  function addSubscription(subscription: ISubscription) {
    SubscriptionCreate(subscription);
    dispatch({
      type: SubscriptionActionType.ADD_SUBSCRIPTION,
      payload: subscription,
    });
  }

  function getSubscriptions(): ISubscription[] {
    return SubscriptionGetAll();
  }

  return { addSubscription, getSubscriptions };
};

const useValidationContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("SubscriptionContext must be used within a SubscriptionProvider");
  }
  return context;
};

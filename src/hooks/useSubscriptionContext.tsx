import { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import { ISubscription } from "../shared/interfaces/ISubscription";

export const useSubscriptionContext = () => {
  const { subscriptions, setSubscriptions } = useValidationContext();

  function addSubscription(subscription: ISubscription) {
    setSubscriptions((subscriptions) => [...subscriptions, subscription]);
  }

  function listAllSubscriptions() {
    return subscriptions;
  }

  return { addSubscription, listAllSubscriptions };
};

const useValidationContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("SubscriptionContext must be used within a SubscriptionProvider");
  }
  return context;
};

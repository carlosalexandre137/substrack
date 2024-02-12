import { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import { ISubscription } from "../shared/interfaces/ISubscription";
import { SubscriptionActionType } from "../enum/Subscription";
import {
  SubscriptionCreate,
  SubscriptionDeleteWithId,
  SubscriptionFind,
  SubscriptionGetAll,
} from "../services/SubscriptionService";

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

  function getSubscriptionWithId(id: number): ISubscription | false {
    return SubscriptionFind(id);
  }

  function deleteSubscriptionWithId(id: string): boolean {
    const validationDelete = SubscriptionDeleteWithId(id);
    if (validationDelete) {
      dispatch({
        type: SubscriptionActionType.DELETE_SUBSCRIPTION,
        payload: id,
      });
    }
    return validationDelete;
  }

  return {
    addSubscription,
    getSubscriptions,
    getSubscriptionWithId,
    deleteSubscriptionWithId,
  };
};

const useValidationContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("SubscriptionContext must be used within a SubscriptionProvider");
  }
  return context;
};

import { useContext } from "react";
import { SubscriptionContext } from "@/contexts/SubscriptionContext";
import { ISubscription } from "@/shared/interfaces/ISubscription";
import { SubscriptionActionType } from "@/enum/Subscription";
import {
  SubscriptionCreate,
  SubscriptionDeleteWithId,
  SubscriptionUpdateWithId,
  SubscriptionFind,
  SubscriptionGetAll,
} from "@/services/SubscriptionService";

export const useSubscriptionContext = () => {
  const { subscriptions, dispatch } = useValidationContext();

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
    const subscription = SubscriptionFind(Number(id));
    const validationDelete = SubscriptionDeleteWithId(id);
    if (validationDelete && subscription) {
      dispatch({
        type: SubscriptionActionType.DELETE_SUBSCRIPTION,
        payload: subscription,
      });
    }
    return validationDelete;
  }

  function updateSubscriptionWithId(
    id: string | number,
    subscription: ISubscription
  ): ISubscription {
    const sub = SubscriptionUpdateWithId(id, subscription);
    dispatch({
      payload: sub,
      type: SubscriptionActionType.UPDATE_SUBSCRIPTION,
    });

    return sub;
  }

  return {
    subscriptions,
    addSubscription,
    getSubscriptions,
    getSubscriptionWithId,
    deleteSubscriptionWithId,
    updateSubscriptionWithId,
  };
};

const useValidationContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error(
      "SubscriptionContext must be used within a SubscriptionProvider"
    );
  }
  return context;
};

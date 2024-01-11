import { useContext, useMemo } from "react";
import { SubscriptionContext } from "./../contexts/SubscriptionContext";
import { ADD_SUBSCRIPTION } from "../reducers/SubscriptionReducer";
import { subscriptionUpdate } from "../model/subscription/Index";

const addSubscriptionAction = (subscription) => ({ type: ADD_SUBSCRIPTION, payload: subscription });

export const useSubscriptionContext = () => {
  const { subscriptions, dispatch } = useContext(SubscriptionContext);

  function addSubscription(subscription) {
    dispatch(addSubscriptionAction(subscription));
  }

  useMemo(() => {
    subscriptionUpdate(subscriptions);
  }, [subscriptions]);

  return { addSubscription };
};

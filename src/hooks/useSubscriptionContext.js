import { useContext } from "react";
import { SubscriptionContext } from "./../contexts/SubscriptionContext";
import { ADD_SUBSCRIPTION } from "../reducers/SubscriptionReducer";
import { subscriptionCreate } from "../model/subscription/Index";

const addSubscriptionAction = (subscription) => ({ type: ADD_SUBSCRIPTION, payload: subscription });

export const useSubscriptionContext = () => {
  const { subscriptions, dispatch } = useContext(SubscriptionContext);

  function addSubscription(subscription) {
    const sub = subscriptionCreate(subscription);
    dispatch(addSubscriptionAction(sub));
  }

  return { subscriptions, addSubscription };
};

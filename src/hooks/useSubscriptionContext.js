import { useContext } from "react";
import { SubscriptionContext } from "./../contexts/SubscriptionContext";
import { ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from "../reducers/SubscriptionReducer";
import { subscriptionCreate, subscriptionDelete } from "../model/subscription/Index";

const addSubscriptionAction = (subscription) => ({ type: ADD_SUBSCRIPTION, payload: subscription });
const removeSubscriptionAction = (id) => ({ type: REMOVE_SUBSCRIPTION, payload: id });

export const useSubscriptionContext = () => {
  const { subscriptions, dispatch } = useContext(SubscriptionContext);

  function addSubscription(subscription) {
    const sub = subscriptionCreate(subscription);
    dispatch(addSubscriptionAction(sub));
  }

  function removeSubscription(id) {
    subscriptionDelete(id);
    dispatch(removeSubscriptionAction(id));
  }

  return { subscriptions, addSubscription, removeSubscription };
};

import { useContext } from "react";
import { SubscriptionContext } from "contexts/SubscriptionContext";
import { ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION, UPDATE_SUBSCRIPTION } from "reducers/SubscriptionReducer";
import { subscriptionCreate, subscriptionDelete, subscriptionUpdate } from "model/subscription/Index";
import { formatItemsSubscription } from "utils/subscription";

const addSubscriptionAction = (subscription) => ({ type: ADD_SUBSCRIPTION, payload: subscription });
const removeSubscriptionAction = (id) => ({ type: REMOVE_SUBSCRIPTION, payload: id });
const updateSubscriptionAction = (subscription) => ({ type: UPDATE_SUBSCRIPTION, payload: subscription });

export const useSubscriptionContext = () => {
  const { subscriptions, dispatch } = useContext(SubscriptionContext);

  function addSubscription(subscription) {
    const sub = subscriptionCreate(formatItemsSubscription(subscription));
    dispatch(addSubscriptionAction(sub));
  }

  function removeSubscription(id) {
    subscriptionDelete(id);
    dispatch(removeSubscriptionAction(id));
  }

  function editSubscription(id, subscription) {
    const sub = subscriptionUpdate(id, formatItemsSubscription(subscription));
    dispatch(updateSubscriptionAction(sub));
  }

  return { subscriptions, addSubscription, removeSubscription, editSubscription };
};

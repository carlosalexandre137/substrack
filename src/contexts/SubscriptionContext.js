import { createContext, useReducer } from "react";
import { SubscriptionReducer } from "../reducers/SubscriptionReducer";
import { subscriptionAll } from "../model/subscription/Index";

export const SubscriptionContext = createContext();
SubscriptionContext.displayName = "Subscriptions";

export const SubscriptionProvider = ({ children }) => {
  const subscriptionsDB = subscriptionAll();
  const [subscriptions, dispatch] = useReducer(SubscriptionReducer, subscriptionsDB);
  return <SubscriptionContext.Provider value={{ subscriptions, dispatch }}>{children}</SubscriptionContext.Provider>;
};

import { createContext, useState } from "react";

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  return <SubscriptionContext.Provider value={{ subscriptions, setSubscriptions }}>{children}</SubscriptionContext.Provider>;
};

import { createContext, useReducer } from "react";
import { ISubscription, ISubscriptionAction } from "../shared/interfaces/ISubscription";
import { SubscriptionReducer } from "../reducers/SubscriptionReducer";

interface SubscriptionContextType {
  subscriptions: ISubscription[];
  dispatch: React.Dispatch<ISubscriptionAction>;
}

export const SubscriptionContext = createContext<SubscriptionContextType | null>(null);
SubscriptionContext.displayName = "Subscription";

interface SubscriptionProviderProps {
  children: React.ReactNode;
}

export const SubscriptionProvider = ({ children }: SubscriptionProviderProps) => {
  const [subscriptions, dispatch] = useReducer(SubscriptionReducer, []);

  return (
    <SubscriptionContext.Provider value={{ subscriptions, dispatch }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

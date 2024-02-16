import { Reducer, createContext, useReducer } from "react";
import {
  ISubscription,
  ISubscriptionAction,
} from "../shared/interfaces/ISubscription";
import { SubscriptionReducer } from "../reducers/SubscriptionReducer";
import { SubscriptionGetAll } from "../services/SubscriptionService";

interface SubscriptionContextType {
  subscriptions: ISubscription[];
  dispatch: React.Dispatch<ISubscriptionAction>;
}

export const SubscriptionContext =
  createContext<SubscriptionContextType | null>(null);
SubscriptionContext.displayName = "Subscription";

interface SubscriptionProviderProps {
  children: React.ReactNode;
}

export const SubscriptionProvider = ({
  children,
}: SubscriptionProviderProps) => {
  const initSubscriptions = SubscriptionGetAll();
  const [subscriptions, dispatch] = useReducer(
    SubscriptionReducer as Reducer<ISubscription[], ISubscriptionAction>,
    initSubscriptions
  );

  return (
    <SubscriptionContext.Provider value={{ subscriptions, dispatch }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

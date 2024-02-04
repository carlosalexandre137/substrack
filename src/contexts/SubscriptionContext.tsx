import { createContext, useState } from "react";
import { ISubscription } from "../shared/interfaces/ISubscription";

interface SubscriptionContextType {
  subscriptions: ISubscription[];
  setSubscriptions: React.Dispatch<React.SetStateAction<ISubscription[]>>;
}

export const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

interface SubscriptionProviderProps {
  children: React.ReactNode;
}

export const SubscriptionProvider = ({ children }: SubscriptionProviderProps) => {
  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
  return <SubscriptionContext.Provider value={{ subscriptions, setSubscriptions }}>{children}</SubscriptionContext.Provider>;
};

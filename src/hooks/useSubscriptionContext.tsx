import { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";

export const useSubscriptionContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("SubscriptionContext deve ser usado dentro de um SubscriptionProvider");
  }
  return context;
};

// SubscriptionReducer.ts
import { SubscriptionActionType } from "@/enum/Subscription";
import {
  ISubscription,
  ISubscriptionAction,
} from "@/shared/interfaces/ISubscription";

export const SubscriptionReducer = (
  state: ISubscription[],
  action: ISubscriptionAction
) => {
  switch (action.type) {
    case SubscriptionActionType.ADD_SUBSCRIPTION: {
      const subscription = action.payload;
      return [subscription, ...state];
    }
    case SubscriptionActionType.DELETE_SUBSCRIPTION: {
      const subscription = action.payload;
      return state.filter((sub) => sub.id !== subscription.id);
    }
    case SubscriptionActionType.UPDATE_SUBSCRIPTION: {
      const subscription = action.payload;
      return state.map((sub) =>
        subscription.id === sub.id ? subscription : sub
      );
    }
    default:
      return state;
  }
};

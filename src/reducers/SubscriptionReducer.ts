import { SubscriptionActionType } from "../enum/Subscription";
import { ISubscription, ISubscriptionAction } from "../shared/interfaces/ISubscription";

export const SubscriptionReducer = (state: ISubscription[], action: ISubscriptionAction) => {
  switch(action.type) {
    case SubscriptionActionType.ADD_SUBSCRIPTION: {
      const subs = action.payload;
      return [subs, ...state];
    }
    default:
      return state;
  }
}
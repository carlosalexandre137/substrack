import { SubscriptionActionType } from "../enum/Subscription";
import { ISubscription, ISubscriptionAction } from "../shared/interfaces/ISubscription";

export const SubscriptionReducer = (
  state: ISubscription[],
  action: ISubscriptionAction
) => {
  switch (action.type) {
    case SubscriptionActionType.ADD_SUBSCRIPTION: {
      const subs = action.payload;
      return [subs, ...state];
    }
    case SubscriptionActionType.DELETE_SUBSCRIPTION: {
      const id = action.payload;
      return state.filter((sub) => sub.id !== Number(id));
    }
    default:
      return state;
  }
};

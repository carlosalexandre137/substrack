import { SubscriptionActionType } from "../../reducers/SubscriptionReducer";

export interface ISubscription {
  name: string,
  link: string,
  plan: string,
  price: number,
  date: Date,
  modality: string,
}

export interface ISubscriptionAction {
  type: SubscriptionActionType;
  payload: ISubscription;
}

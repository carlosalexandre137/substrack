import { SubscriptionActionType } from "../../enum/Subscription";

export interface ISubscription {
  id?: number,
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
